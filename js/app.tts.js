/**
 * Copyright (c) 2013-2017 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jshint browser: true, jquery: true */
/* globals define: false, require: false */


(function (f, define) {
    'use strict';
    define([
        './window.assert',
        './window.logger'
    ], f);
})(function () {

    'use strict';

    var app = window.app = window.app || {};
    var tts = app.tts = app.tts || {};

    (function ($, undefined) {

        var assert = window.assert;
        var logger = new window.Logger('app.tts');
        var BOOLEAN = 'boolean';
        var NUMBER = 'number';
        var STRING = 'string';
        var UNDEFINED = 'undefined';
        var CHUNK_SIZE = 175;
        var voices= [];
        var loadVoices = function () {
            voices = window.speechSynthesis.getVoices();
        };

        /* NOTES
        On Android 5 (Nexus 7), I could not get the sound from W3C Speech APIs to work before changing some Android settings I could not reproduce
        in Settings > System > Accessibility > Text-to-speech output as explained at https://www.greenbot.com/article/2105862/android/how-to-get-started-with-google-text-to-speech.html
        */

        /**
         * Load voices
         */
        if ('speechSynthesis' in window) {
            loadVoices();
            // Chrome loads voices asynchronously, which means the previous might have returned an empty array
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        /**
         * Test cordova plugin
         * @see https://github.com/vilic/cordova-plugin-tts
         * @type {*}
         */
        tts._useCordovaPlugIn = function () {
            // This has to be a function because it needs to be evaluated once the TTS plugin is loaded
            return !!(window.cordova && window.device && window.device.platform !== 'browser' && window.TTS && $.isFunction(window.TTS.speak));
        };

        /**
         * Test HTML5 Speech API
         * @see https://codepen.io/matt-west/pen/wGzuJ
         */
        tts._useSpeechSynthesis = function () {
            return !!('speechSynthesis' in window && $.isFunction(window.speechSynthesis.speak) && $.isFunction(window.SpeechSynthesisUtterance));
        };

        /**
         * Get voice
         * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice
         * Edge and Firefox only load the voices corresponding to browser language settings
         * Chrome and Safari load all voice languages
         * This can be tested at https://codepen.io/matt-west/pen/wGzuJ
         */
        tts._getVoice = function (language) {
            assert.type(STRING, language, assert.format(assert.messages.type.default, 'language', STRING));
            var natives = voices.filter(function (voice) { return voice.lang.toLowerCase().startsWith(language.toLowerCase()); });
            var localDefaults = natives.filter(function (voice) { return voice.default && voice.localService; });
            if (Array.isArray(localDefaults) && localDefaults.length) {
                return localDefaults[0];
            } else if (Array.isArray(natives) && natives.length) {
                return natives[0];
            }
        };

        /**
         * Clear markdown from markings that are irrelevant to speech
         * (Note it is also possible to convert to html and request the text())
         * @param markdown
         * @private
         */
        tts._clearMarkdown = function (markdown) {
            assert.type(STRING, markdown, assert.format(assert.messages.type.default, 'markdown', STRING));
            return markdown
                .replace(/[#`>_\*]/g, '') // remove headings, code (backticks), emphasis
                .replace(/!?\[([^\]]+)\]\([^\)]+\)/g, '$1'); // remove web and image links
        };

        /**
         * Chrome version < 56 does not speak text longer than approx. 300 characters,
         * so we need to chunk text into an array of smaller strings to play
         * @see http://stackoverflow.com/questions/21947730/chrome-speech-synthesis-with-longer-texts
         * @see https://github.com/unk1911/speech/blob/master/js/speech.js
         * @param text
         * @param size
         * @private
         */
        tts._chunk = function (text, size) {
            assert.type(STRING, text, assert.format(assert.messages.type.default, 'text', STRING));
            assert.type(NUMBER, size, assert.format(assert.messages.type.default, 'size', NUMBER));
            var ret = [];
            // Chromium is chrome or opera and window.StyleMedia excludes MS Edge
            // @see http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
            if ('chrome' in window && $.type(window.StyleMedia) === UNDEFINED) {
                var matches = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                var version = $.isArray(matches) && matches.length === 3 && parseInt(matches[2], 10);
                if (version < 56) {
                    // Note: This regular expression could be improved:
                    // 1. to exclude native voices which do not fail at ~200-300 characters
                    // 2. not to break up numbers like 10,000.00 - see https://github.com/unk1911/speech/blob/master/js/speech.js
                    var rx = new RegExp(
                        '^[\\s\\S]{' + Math.floor(size / 2) + ',' + size +
                        '}[.!?,]{1}|^[\\s\\S]{1,' + size + '}$|^[\\s\\S]{1,' +
                        size + '} ');
                    while (text.length > 0) {
                        var chunk = text.match(rx)[0];
                        ret.push(chunk.trim());
                        text = text.substring(chunk.length);
                    }
                } else {
                    ret.push(text);
                }
            } else {
                ret.push(text);
            }
            return ret;
        };

        /**
         * Get a speach synthesis promise
         * @param text
         * @param language
         * @private
         */
        tts._speechSynthesisPromise = function (text, language) {
            assert.type(STRING, text, assert.format(assert.messages.type.default, 'text', STRING));
            assert.type(STRING, language, assert.format(assert.messages.type.default, 'language', STRING));
            var dfd = $.Deferred();
            if (tts._useSpeechSynthesis()) {
                var voice = tts._getVoice(language);
                if (voice && voice.lang) {
                    var utterance = new window.SpeechSynthesisUtterance(text);
                    // utterance.lang = language; // Setting an unavailable language in Microsoft Edge breaks the speech
                    utterance.voice = voice;
                    utterance.rate = 1;
                    utterance.onend = function(evt) { // Returns a SpeechSynthesisEvent
                        if (evt.type === 'error') {
                            // This occurs on Edge when the language pack has not been installed
                            dfd.reject(new Error('Speech synthesis error.'));
                            logger.error({
                                method: 'tts._speechSynthesisPromise',
                                message: 'Speech synthesis error..'
                            });
                        } else {
                            dfd.resolve(evt);
                        }
                    };
                    utterance.onerror = dfd.reject;
                    window.speechSynthesis.speak(utterance);
                    if ('console' in window) {
                        window.console.log(utterance); // a funny workaround to ensure the onend callback is called in Chrome
                    }
                } else {
                    dfd.reject(new Error('No voice available to speak text.'));
                    logger.error({
                        method: 'tts._speechSynthesisPromise',
                        message: 'No voice available to speak text.'
                    });
                }
            } else {
                dfd.resolve();
            }
            return dfd.promise();
        };

        /**
         * Use tts to speak
         * @param text
         * @param language
         * @param clear
         */
        tts.doSpeak = function (text, language, clear) {
            assert.type(STRING, text, assert.format(assert.messages.type.default, 'text', STRING));
            assert.type(STRING, language, assert.format(assert.messages.type.default, 'language', STRING));
            assert.type(BOOLEAN, clear, assert.format(assert.messages.type.default, 'clear', BOOLEAN));
            var dfd = $.Deferred();
            if (clear) {
                text = tts._clearMarkdown(text);
            }
            if (tts._useSpeechSynthesis()) {
                window.alert('web speech');
                // In the browser - https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
                var chunks = tts._chunk(text, CHUNK_SIZE);
                var promises = [];
                $.each(chunks, function (index, chunk) {
                    promises.push(tts._speechSynthesisPromise(chunk, language));
                });
                $.when.apply(null, promises)
                    .done(dfd.resolve)
                    .fail(dfd.reject);
                logger.debug({
                    method: 'tts.doSpeak',
                    message: 'Text spoken with W3C Speech API'
                });
            } else if (tts._useCordovaPlugIn()) {
                // For iOS and Android via TTS plugin
                // Note: iOS WKWebView engine for cordova supports speechSynthesis (see other branch of if) but does not output any sound
                window.TTS.speak(
                    {
                        text: text,
                        locale: language === 'fr' ? 'fr-FR' : 'en-US',
                        // https://docs.telerik.com/kendo-ui/api/javascript/kendo#fields-support.mobileOS
                        rate: kendo.support.mobileOS.name === 'ios' ? 1.5 : 1
                    },
                    dfd.resolve,
                    dfd.reject
                );
                logger.debug({
                    method: 'tts.doSpeak',
                    message: 'Text spoken with Cordova Plug-in'
                });
            } else {
                dfd.resolve();
            }
            return dfd.promise();
        };

        /**
         * Use tts to cancel speak
         */
        tts.cancelSpeak = function () {
            var dfd =  $.Deferred();
            if (tts._useSpeechSynthesis()) {
                // In the browser - https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel
                window.speechSynthesis.cancel();
                dfd.resolve();
                logger.debug({
                    method: 'tts.cancelSpeak',
                    message: 'Text canceled with W3C Speech API'
                });
            } else if (tts._useCordovaPlugIn()) {
                // For iOS and Android via TTS plugin
                // @see http://ourcodeworld.com/articles/read/370/how-to-convert-text-to-speech-speech-synthesis-in-cordova
                window.TTS.speak('', dfd.resolve, dfd.reject);
                logger.debug({
                    method: 'tts.cancelSpeak',
                    message: 'Text canceled with Cordova Plug-in'
                });
            } else {
                dfd.resolve();
            }
            return dfd.promise();
        };

    }(window.jQuery));

    return app.tts;

}, typeof define === 'function' && define.amd ? define : function (_, f) { 'use strict'; f(); });
