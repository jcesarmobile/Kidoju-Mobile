/**
 * Copyright (c) 2013-2016 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jshint browser: true */
/* globals define: false */

(function (f, define) {
    'use strict';
    define([
        '../vendor/kendo/cultures/kendo.culture.fr-FR.js',
        '../vendor/kendo/messages/kendo.messages.fr-FR.js',
        '../messages/kidoju.messages.fr.js'
    ], f);
})(function () {

    'use strict';

    (function () {
        var app = window.app = window.app || {};
        app.cultures = app.cultures || {};
        app.cultures.fr = {
            versions: {
                draft: {
                    name: 'Brouillon'
                },
                published: {
                    name: 'Version {0}'
                }
            },
            // Activities view
            activities: {
                viewTitle: 'Activités'
            },
            // Categories view
            categories: {
                viewTitle: 'Explorer'
            },
            // Drawer
            drawer: {
                categories: 'Explorer',
                favourites: 'Favoris',
                activities: 'Activités',
                settings: 'Réglages'
            },
            // Favourites view
            favourites: {
                viewTitle: 'Favoris'
            },
            // Player view
            player: {
                explanations: 'Explications',
                instructions: 'Instructions',
                viewTitle: 'Page {0} de {1}'
            },
            // Settings view
            settings: {
                viewTitle: 'Réglages',
                user: 'Utilisateur',
                version: 'Version',
                language: 'Langue',
                theme: 'Thème'
            },
            // Summaries view
            summaries: {
                viewTitle: 'Recherche',
                actionSheet: {
                    cancel: 'Annuler',
                    play: 'Jouer',
                    share: 'Partager'
                }
            },
            // viewModel
            viewModel: {
                languages: [
                    { value: 'en', text: 'English' },
                    { value: 'fr', text: 'French' }
                ],
                themes: [
                    { value: 'fiori', text: 'Fiori' },
                    { value: 'flat', text: 'Flat' },
                    { value: 'material', text: 'Material' }, // TODO light and Dark themes?
                    // { value: '', text: 'Native' }, // TODO in the future but which theme for web widgets and kidoju widgets?
                    { value: 'nova', text: 'Nova' },
                    { value: 'office365', text: 'Office 365' }
                ]
            }
        };
        window.kendo.culture('fr-FR');
    }());

    return window.app;

}, typeof define === 'function' && define.amd ? define : function (_, f) { 'use strict'; f(); });
