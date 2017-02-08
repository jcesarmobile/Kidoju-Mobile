/**
 * Copyright (c) 2013-2016 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jshint browser: true, jquery: true */
/* globals define: false */

(function (f, define) {
    'use strict';
    define([
        './vendor/katex/katex', // Keep at the top considering function parameter below
        './window.assert',
        './window.logger',
        './vendor/kendo/kendo.binder',
        './vendor/kendo/kendo.userevents',
        './vendor/kendo/kendo.draganddrop'
    ], f);
})(function (katX) {

    'use strict';

    (function ($, undefined) {

        var kendo = window.kendo;
        var Widget = kendo.ui.Widget;
        var assert = window.assert;
        var logger = new window.Logger('kidoju.widgets.mathexpression');
        var katex = window.katex || katX;
        var FUNCTION = 'function';
        var STRING = 'string';
        var NULL = 'null';
        var UNDEFINED = 'undefined';
        var CHANGE = 'change';
        // var NS = '.kendoMathExpression';
        var WIDGET_CLASS = 'kj-mathexpression'; // 'k-widget kj-mathexpression';

        /*********************************************************************************
         * Widget
         *********************************************************************************/

        /**
         * MathExpression
         * @class MathExpression Widget (kendoMathExpression)
         */
        var MathExpression = Widget.extend({

            /**
             * Initializes the widget
             * @param element
             * @param options
             */
            init: function (element, options) {
                var that = this;
                options = options || {};
                Widget.fn.init.call(that, element, options);
                logger.debug({method: 'init', message: 'widget initialized'});
                that.bind(CHANGE, $.proxy(that.refresh, that));
                that._layout();
                that.value(that.options.value);
                // see http://www.telerik.com/forums/kendo-notify()
                kendo.notify(that);
            },

            /**
             * Widget options
             * @property options
             */
            options: {
                name: 'MathExpression',
                value: null,
                errorColor: '#cc0000',
                inline: false
            },

            /**
             * Widget events
             * @property events
             */
            events: [
                CHANGE
            ],

            /**
             * Value for MVVM binding
             * @param value
             */
            value: function (value) {
                var that = this;
                if ($.type(value) === STRING || $.type(value) === NULL) {
                    if (that._value !== value) {
                        that._value = value;
                        that.trigger(CHANGE, { value: that._value });
                    }
                } else if ($.type(value) === UNDEFINED) {
                    return that._value;
                } else {
                    throw new TypeError('`value` is expected to be a string if not undefined');
                }
            },

            /**
             * Builds the widget layout
             * @private
             */
            _layout: function () {
                var that = this;
                that.wrapper = that.element;
                that.element.addClass(WIDGET_CLASS);
            },

            /**
             * Refresh the widget
             */
            refresh: function () {
                assert.type(FUNCTION, katex.render, 'Make sure KaTeX is available.');
                var that = this;
                var element = that.element;
                var options = that.options;
                // KaTeX option { throwOnError: false } is not equivalent to the following which is required to display an error
                try {
                    katex.render(that.value() || '', element[0], { displayMode: !options.inline });
                } catch (ex) {
                    element.html('<span style="color:' + options.errorColor + '">' + kendo.htmlEncode(ex.message) + '</span>');
                }
                logger.debug('widget refreshed');
            },

            /**
             * Clears the widget
             * @method _clear
             * @private
             */
            _clear: function () {
                var that = this;
                var element = that.element;
                // unbind kendo
                // kendo.unbind(element);
                // unbind all other events
                element.find('*').off();
                element.off();
                // remove descendants
                element.empty();
                // remove element classes
                element.removeClass(WIDGET_CLASS);
            },

            /**
             * Destroys the widget including all DOM modifications
             * @method destroy
             */
            destroy: function () {
                var that = this;
                Widget.fn.destroy.call(that);
                that._clear();
                kendo.destroy(that.element);
            }

        });

        kendo.ui.plugin(MathExpression);

    }(window.jQuery));

    return window.kendo;

}, typeof define === 'function' && define.amd ? define : function (_, f) { 'use strict'; f(); });
