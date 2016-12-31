/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.76 dated 12/31/2016 */
/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.76 dated 12/31/2016 */
webpackJsonp([2],{406:function(e,t,i){var o,r,n;!function(s,a){"use strict";r=[i(407),i(408),i(409)],o=s,n="function"==typeof o?o.apply(t,r):o,!(void 0!==n&&(e.exports=n))}(function(){"use strict";return function(){var e=window.app=window.app||{};e.cultures=e.cultures||{},e.cultures.fr={versions:{draft:{name:"Brouillon"},published:{name:"Version {0}"}},layout:{back:"Retour"},activities:{viewTitle:"Activités",grid:{columns:{date:"Date",score:"Score",title:"Titre"}}},categories:{viewTitle:"Explorer"},correction:{viewTitle:"Page {0} de {1}",explanations:"Explications"},dialogs:{buttons:{cancel:{text:"Annuler",icon:"close"},ok:{text:"OK",icon:"ok"}},confirm:"Confirmation",error:"Erreur",info:"Information",success:"Succès",warning:"Attention",submitQuestion:{message:"Voulez-vous vraiment soumettre pour obtenir votre score et la correction ?"}},drawer:{activities:"Activités",categories:"Explorer",favourites:"Favoris",scan:"QR Code",settings:"Réglages"},favourites:{viewTitle:"Favoris"},finder:{viewTitle:"Recherche"},notifications:{activitiesQueryFailure:"Il y a eu une erreur lors du chargement des activités.",clickSubmitInfo:'Pressez <i class="kf kf-submit"></i> pour calculer votre score.',confirmSubmit:"Voulez-vous vraiment soumettre pour obtenir votre score et la correction ?",networkOffline:"Vous n'êtes pas connecté à Internet.",oAuthTokenFailure:"Le service d'authentification a retourné une erreur.",openUrlUnknown:"Il y a eu une erreur d'ouverture d'une url inconnue.",openUrlLanguage:"Veuillez changer de langue pour ouvrir cette url.",pageNavigationInfo:'Pressez <i class="kf kf-previous"></i> et <i class="kf kf-next"></i> pour changer de page.',pinSaveFailure:"Les pins à 4 chiffres ne correspondent pas.",pinSaveInfo:"Veuillez saisir et confirmer votre pin à 4 chiffres avant d'enregistrer.",pinValidationFailure:"Mauvais pin à 4 chiffres.",pinValidationInfo:"Veuillez saisir votre pin à 4 chiffres pour vous connecter.",scanFailure:"Erreur de scan. Vérifiez que l'app soit autorisée à utiliser la caméra.",scanPrompt:"Veuillez placer un code dans l'espace délimité.",scanLanguageWarning:"Veuillez changer de language dans les paramètres pour scanner ce code.",scanMatchWarning:"Ce code ne correspond pas.",scoreCalculationFailure:"Il y a eu une erreur de calcul de votre score.",scoreSaveFailure:"Il y a eu une erreur d'enregistremenet de votre score.",scoreSaveSuccess:"Votre score a été enregistré avec succès.",settingsLoadFailure:"Il y a eu une erreur lors du chargement des paramètres.",sharingFailure:"Il y a eu une erreur lors du partage du quiz.",sharingSuccess:"Ce quiz a été partagé avec succès.",showScoreInfo:'Pressez <i class="kf kf-score"></i> pour retourner à votre score.',signinUrlFailure:"Il y a eu une erreur d'obtention d'url de connexion pour le service d'authentification.",summariesQueryFailure:"Il y a eu une erreur de recherche dans la base de données.",summaryLoadFailure:"Il y a eu une erreur lors du chargement des données du résumé descriptif.",summaryViewInfo:"Pressez le bouton en bas de page.",unknownError:"Il y a eu une erreur inconnue. Veuillez redémarrer l'app",userLoadFailure:"Il y a eu une erreur lors du chargement du profil utilisateur.",userSaveFailure:"Il y a eu une erreur d'enregistremenet de votre profil utilisateur.",userSaveSuccess:"Votre profil utilisateur a été enregistré avec succès.",userSignInSuccess:"Vous êtes connecté en tant que {0}.",usersQueryFailure:"Il y a eu une erreur lors du chargement de la liste des utilisateurs.",versionLoadFailure:"Il y a eu une erreur lors du chargement de la version.",versionsLoadFailure:"Il y a eu une erreur lors du chargement des versions."},player:{viewTitle:"Page {0} de {1}",instructions:"Instructions"},sync:{viewTitle:"Synchronisation"},score:{viewTitle:"Score {0:p0}",grid:{columns:{description:"Question",page:"Page",result:"Résultat"},noRecords:"Pas d'activité"}},settings:{viewTitle:"Réglages",user:"Utilisateur",version:"Version",language:"Langue",theme:"Thème",switch:"Changer d'Utilisateur"},signin:{viewTitle:"Identification",welcome:"Veuillez sélectionner un service d'authentification."},summary:{viewTitle:"Détails",categories:"Catégories",description:"Description",tags:"Mots Clés",title:"Titre",go:"Aller",actionSheet:{cancel:"Annuler",feedback:"Signaler",play:"Jouer",share:"Partager"},socialSharing:{chooserTitle:"Sélectionnez une application",message:"Evaluez vos connaissances sur Kidoju.\n\nTitre:\t\t{0}\nLien:\t\t{1}\nDescription:\t{2}",subject:"Que connaissez-vous à propos de “{0}”?"}},user:{viewTitle:"Utilisateur",firstName:"Prénom",lastName:"Nom",lastUse:"Dern. Util.",pin:"PIN",confirm:"Confirmation",save:"Enregistrer",signIn:"S'identifier",newUser:"Nouvel Utilisateur"},viewModel:{languages:[{value:"en",text:"English"},{value:"fr",text:"French"}],themes:[{text:"Android Dark",name:"andark",skin:"android-dark"},{text:"Android Light",name:"anlight",skin:"android-light"},{text:"Blackberry",name:"blackberry",skin:"blackberry"},{text:"Fiori",name:"fiori",skin:"fiori"},{text:"Flat",name:"flat",skin:"flat"},{text:"iOS 6",name:"ios",skin:"ios"},{text:"iOS 7+",name:"ios7",skin:"ios7"},{text:"Material",name:"material",skin:"material"},{text:"Nova",name:"nova",skin:"nova"},{text:"Office 365",name:"office365",skin:"office365"},{text:"Windows Phone",name:"wp",skin:"wp"}]}},window.kendo.culture("fr-FR")}(),window.app},i(310))},407:function(e,t,i){var o,r,n;!function(s){r=[i(317)],o=s,n="function"==typeof o?o.apply(t,r):o,!(void 0!==n&&(e.exports=n))}(function(){!function(e,t){kendo.cultures["fr-FR"]={name:"fr-FR",numberFormat:{pattern:["-n"],decimals:2,",":" ",".":",",groupSize:[3],percent:{pattern:["-n %","n %"],decimals:2,",":" ",".":",",groupSize:[3],symbol:"%"},currency:{name:"Euro",abbr:"EUR",pattern:["-n $","n $"],decimals:2,",":" ",".":",",groupSize:[3],symbol:"€"}},calendars:{standard:{days:{names:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],namesAbbr:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],namesShort:["di","lu","ma","me","je","ve","sa"]},months:{names:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],namesAbbr:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."]},AM:[""],PM:[""],patterns:{d:"dd/MM/yyyy",D:"dddd d MMMM yyyy",F:"dddd d MMMM yyyy HH:mm:ss",g:"dd/MM/yyyy HH:mm",G:"dd/MM/yyyy HH:mm:ss",m:"d MMMM",M:"d MMMM",s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",t:"HH:mm",T:"HH:mm:ss",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'",y:"MMMM yyyy",Y:"MMMM yyyy"},"/":"/",":":":",firstDay:1}}}}(this)})},408:function(e,t,i){var o,r,n;!function(s){r=[i(317)],o=s,n="function"==typeof o?o.apply(t,r):o,!(void 0!==n&&(e.exports=n))}(function(){!function(e,t){kendo.ui.FilterCell&&(kendo.ui.FilterCell.prototype.options.operators=e.extend(!0,kendo.ui.FilterCell.prototype.options.operators,{date:{eq:"Est égal à",gte:"Est postérieur ou égal à",gt:"Est postérieur",lte:"Est antérieur ou égal à",lt:"Est antérieur",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},number:{eq:"Est égal à",gte:"Est supérieur ou égal à",gt:"Est supérieur à",lte:"Est inférieur ou égal à",lt:"Est inférieur à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},string:{endswith:"Se termine par",eq:"Est égal à",neq:"N’est pas égal à",startswith:"Commence par",contains:"Contient",doesnotcontain:"Ne contient pas",isnull:"Est nulle",isnotnull:"N’est pas nulle",isempty:"Est vide",isnotempty:"N’est pas vide"},enums:{eq:"Est égal à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"}})),kendo.ui.FilterMenu&&(kendo.ui.FilterMenu.prototype.options.operators=e.extend(!0,kendo.ui.FilterMenu.prototype.options.operators,{date:{eq:"Est égal à",gte:"Est postérieur ou égal à",gt:"Est postérieur",lte:"Est antérieur ou égal à",lt:"Est antérieur",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},number:{eq:"Est égal à",gte:"Est supérieur ou égal à",gt:"Est supérieur à",lte:"Est inférieur ou égal à",lt:"Est inférieur à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},string:{endswith:"Se termine par",eq:"Est égal à",neq:"N’est pas égal à",startswith:"Commence par",contains:"Contient",doesnotcontain:"Ne contient pas",isnull:"Est nulle",isnotnull:"N’est pas nulle",isempty:"Est vide",isnotempty:"N’est pas vide"},enums:{eq:"Est égal à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"}})),kendo.ui.ColumnMenu&&(kendo.ui.ColumnMenu.prototype.options.messages=e.extend(!0,kendo.ui.ColumnMenu.prototype.options.messages,{columns:"Colonnes",sortAscending:"Tri croissant",sortDescending:"Tri décroissant",settings:"Paramètres de colonne",done:"Fini",lock:"Bloquer",unlock:"Ouvrir"})),kendo.ui.RecurrenceEditor&&(kendo.ui.RecurrenceEditor.prototype.options.messages=e.extend(!0,kendo.ui.RecurrenceEditor.prototype.options.messages,{daily:{interval:"jour(s)",repeatEvery:"Répéter chaque:"},end:{after:" Après",occurrence:"occurrence(s)",label:"Finir:",never:"Jamais",on:"Sur",mobileLabel:"Ends"},frequencies:{daily:"Une fois par jour",monthly:"Une fois par mois",never:"Jamais",weekly:"Une fois par semaine",yearly:"Une fois par an"},monthly:{day:"Jour",interval:"mois",repeatEvery:"Répéter chaque:",repeatOn:"Répéter l'opération sur:"},offsetPositions:{first:"premier",fourth:"quatrième",last:"dernier",second:"second",third:"troisième"},weekly:{repeatEvery:"Répéter chaque:",repeatOn:"Répéter l'opération sur:",interval:"semaine(s)"},yearly:{of:"de",repeatEvery:"Répéter chaque:",repeatOn:"Répéter l'opération sur:",interval:"année(ans)"},weekdays:{day:"jour",weekday:"jour de la semaine",weekend:"jour de week-end"}})),kendo.ui.Grid&&(kendo.ui.Grid.prototype.options.messages=e.extend(!0,kendo.ui.Grid.prototype.options.messages,{commands:{create:"Insérer",destroy:"Effacer",canceledit:"Annuler",update:"Mettre à jour",edit:"Éditer",excel:"Export to Excel",pdf:"Export to PDF",select:"Sélectionner",cancel:"Annuler les modifications",save:"Enregistrer les modifications"},editable:{confirmation:"Êtes-vous sûr de vouloir supprimer cet enregistrement?",cancelDelete:"Annuler",confirmDelete:"Effacer"},noRecords:"Aucun enregistrement disponible."})),kendo.ui.Pager&&(kendo.ui.Pager.prototype.options.messages=e.extend(!0,kendo.ui.Pager.prototype.options.messages,{allPages:"Tous",page:"Page",display:"Afficher les items {0} - {1} de {2}",of:"de {0}",empty:"Aucun enregistrement à afficher.",refresh:"Actualiser",first:"Aller à la première page",itemsPerPage:"articles par page",last:"Aller à la dernière page",next:"Aller à la page suivante",previous:"Aller à la page précédente",morePages:"Plusieurs pages"})),kendo.ui.FilterCell&&(kendo.ui.FilterCell.prototype.options.messages=e.extend(!0,kendo.ui.FilterCell.prototype.options.messages,{filter:"Filtrer",clear:"Effacer filtre",isFalse:"est fausse",isTrue:"est vrai",operator:"Opérateur"})),kendo.ui.FilterMenu&&(kendo.ui.FilterMenu.prototype.options.messages=e.extend(!0,kendo.ui.FilterMenu.prototype.options.messages,{filter:"Filtrer",and:"Et",clear:"Effacer filtre",info:"Afficher les lignes avec la valeur qui",selectValue:"-Sélectionner-",isFalse:"est fausse",isTrue:"est vrai",or:"Ou",cancel:"Annuler",operator:"Opérateur",value:"Valeur"})),kendo.ui.FilterMultiCheck&&(kendo.ui.FilterMultiCheck.prototype.options.messages=e.extend(!0,kendo.ui.FilterMultiCheck.prototype.options.messages,{checkAll:"Choisir toutes",clear:"Effacer filtre",filter:"Filtrer",search:"Recherche"})),kendo.ui.Groupable&&(kendo.ui.Groupable.prototype.options.messages=e.extend(!0,kendo.ui.Groupable.prototype.options.messages,{empty:"Faites glisser un en-tête de colonne et déposer ici pour grouper par cette colonne."})),kendo.ui.Editor&&(kendo.ui.Editor.prototype.options.messages=e.extend(!0,kendo.ui.Editor.prototype.options.messages,{bold:"Gras",createLink:"Insérer un lien hypertexte",fontName:"Police",fontNameInherit:"(police héritée)",fontSize:"Taille de police",fontSizeInherit:"(taille héritée)",formatBlock:"Style du paragraphe",indent:"Augmenter le retrait",insertHtml:"Insérer HTML",insertImage:"Insérer image",insertOrderedList:"Liste numérotée",insertUnorderedList:"Liste à puces",italic:"Italique",justifyCenter:"Centrer",justifyFull:"Justifier",justifyLeft:"Aligner le texte à gauche",justifyRight:"Aligner le texte à droite",outdent:"Diminuer le retrait",strikethrough:"Barré",styles:"Styles",subscript:"Subscript",superscript:"Superscript",underline:"Souligné",unlink:"Supprimer le lien hypertexte",deleteFile:'Êtes-vous sûr de vouloir supprimer "{0}"?',directoryNotFound:"Un répertoire avec ce nom n'a pas été trouvé.",emptyFolder:"Vider le dossier",invalidFileType:'Le fichier sélectionné "{0}" n\'est pas valide. Les types de fichiers supportés sont {1}.',orderBy:"Organiser par:",orderByName:"Nom",orderBySize:"Taille",overwriteFile:'Un fichier avec le nom "{0}" existe déjà dans le répertoire courant. Voulez-vous le remplacer?',uploadFile:"Télécharger",backColor:"Couleur de fond",foreColor:"Couleur",dialogButtonSeparator:"Ou",dialogCancel:"Fermer",dialogInsert:"Insérer",imageAltText:"Le texte de remplacement",imageWebAddress:"Adresse Web",imageWidth:"Largeur (px)",imageHeight:"Hauteur (px)",linkOpenInNewWindow:"Ouvrir dans une nouvelle fenêtre",linkText:"Text",linkToolTip:"Info-bulle",linkWebAddress:"Adresse Web",search:"Search",createTable:"Insérer un tableau",addColumnLeft:"Add column on the left",addColumnRight:"Add column on the right",addRowAbove:"Add row above",addRowBelow:"Add row below",deleteColumn:"Supprimer la colonne",deleteRow:"Supprimer ligne",dropFilesHere:"drop files here to upload",formatting:"Format",viewHtml:"View HTML",dialogUpdate:"Update",insertFile:"Insérer un Fichier",dialogOk:"OK",tableWizard:"Assistant de tableau",tableTab:"Table",cellTab:"Cellule",accessibilityTab:"Accessibilité",caption:"Sous-titre",summary:"Sommaire",width:"Largeur",height:"Hauteur",cellSpacing:"Espacement des cellules",cellPadding:"Rembourrage des cellules",cellMargin:"Marge des cellules",alignment:"Alignement",background:"Fond",cssClass:"CSS Classe",id:"Id",border:"Bordure",borderStyle:"Style de bordure",collapseBorders:"Rétracter bordures",wrapText:"Renvoi à la ligne",associateCellsWithHeaders:"Cellules associées aux entêtes",alignLeft:"Aligner à gauche",alignCenter:"Aligner le centre",alignRight:"Aligner à droite",alignLeftTop:"Aligner à gauche et haut",alignCenterTop:"Aligner le centre et haut",alignRightTop:"Aligner à droite et haut",alignLeftMiddle:"Aligner à gauche et milieu",alignCenterMiddle:"Aligner le centre et milieu",alignRightMiddle:"Aligner à droite et milieu",alignLeftBottom:"Aligner à gauche et bas",alignCenterBottom:"Aligner le centre et bas",alignRightBottom:"Aligner à droite et bas",alignRemove:"Retirer alignement",columns:"Colonnes",rows:"Lignes",selectAllCells:"Sélectionner toutes les cellules"}));var i={uploadFile:"Charger",orderBy:"Trier par",orderByName:"Nom",orderBySize:"Taille",directoryNotFound:"Aucun répértoire de ce nom.",emptyFolder:"Répertoire vide",deleteFile:'Etes-vous sûr de vouloir supprimer "{0}"?',invalidFileType:'Le fichier sélectionné "{0}" n\'est pas valide. Les type fichiers supportés sont {1}.',overwriteFile:'Un fichier du nom "{0}" existe déjà dans ce répertoire. Voulez-vous le remplacer?',dropFilesHere:"glissez les fichiers ici pour les charger",search:"Recherche"};kendo.ui.FileBrowser&&(kendo.ui.FileBrowser.prototype.options.messages=e.extend(!0,kendo.ui.FileBrowser.prototype.options.messages,i)),kendo.ui.ImageBrowser&&(kendo.ui.ImageBrowser.prototype.options.messages=e.extend(!0,kendo.ui.ImageBrowser.prototype.options.messages,i)),kendo.ui.Upload&&(kendo.ui.Upload.prototype.options.localization=e.extend(!0,kendo.ui.Upload.prototype.options.localization,{cancel:"Annuler",dropFilesHere:"déposer les fichiers à télécharger ici",remove:"Retirer",retry:"Réessayer",select:"Sélectionner...",statusFailed:"échoué",statusUploaded:"téléchargé",statusUploading:"téléchargement",uploadSelectedFiles:"Télécharger des fichiers",headerStatusUploaded:"Done",headerStatusUploading:"Uploading..."})),kendo.ui.Scheduler&&(kendo.ui.Scheduler.prototype.options.messages=e.extend(!0,kendo.ui.Scheduler.prototype.options.messages,{allDay:"toute la journée",cancel:"Annuler",editable:{confirmation:"Etes-vous sûr de vouloir supprimer cet élément?"},date:"Date",destroy:"Effacer",editor:{allDayEvent:"Toute la journée",description:"Description",editorTitle:"Evènement",end:"Fin",endTimezone:"End timezone",repeat:"Répéter",separateTimezones:"Use separate start and end time zones",start:"Début",startTimezone:"Start timezone",timezone:" ",timezoneEditorButton:"Fuseau horaire",timezoneEditorTitle:"Fuseaux horaires",title:"Titre",noTimezone:"Pas de fuseau horaire"},event:"Evènement",recurrenceMessages:{deleteRecurring:"Voulez-vous supprimer seulement cet évènement ou toute la série?",deleteWindowOccurrence:"Suppression de l'élément courant",deleteWindowSeries:"Suppression de toute la série",deleteWindowTitle:"Suppression d'un élément récurrent",editRecurring:"Voulez-vous modifier seulement cet évènement ou toute la série?",editWindowOccurrence:"Modifier l'occurrence courante",editWindowSeries:"Modifier la série",editWindowTitle:"Modification de l'élément courant"},save:"Sauvegarder",time:"Time",today:"Aujourd'hui",views:{agenda:"Agenda",day:"Jour",month:"Mois",week:"Semaine",workWeek:"Semaine de travail",timeline:"Chronologie"},deleteWindowTitle:"Suppression de l'élément",showFullDay:"Montrer toute la journée",showWorkDay:"Montrer les heures ouvrables"})),kendo.ui.Validator&&(kendo.ui.Validator.prototype.options.messages=e.extend(!0,kendo.ui.Validator.prototype.options.messages,{required:"{0} est requis",pattern:"{0} n'est pas valide",min:"{0} doit être plus grand ou égal à {1}",max:"{0} doit être plus petit ou égal à {1}",step:"{0} n'est pas valide",email:"{0} n'est pas un courriel valide",url:"{0} n'est pas une adresse web valide",date:"{0} n'est pas une date valide",dateCompare:"La date de fin doit être postérieure à la date de début"})),kendo.ui.Dialog&&(kendo.ui.Dialog.prototype.options.messages=e.extend(!0,kendo.ui.Dialog.prototype.options.localization,{close:"Fermer"})),kendo.ui.Alert&&(kendo.ui.Alert.prototype.options.messages=e.extend(!0,kendo.ui.Alert.prototype.options.localization,{okText:"OK"})),kendo.ui.Confirm&&(kendo.ui.Confirm.prototype.options.messages=e.extend(!0,kendo.ui.Confirm.prototype.options.localization,{okText:"OK",cancel:"Annuler"})),kendo.ui.Prompt&&(kendo.ui.Prompt.prototype.options.messages=e.extend(!0,kendo.ui.Prompt.prototype.options.localization,{okText:"OK",cancel:"Annuler"}))}(window.kendo.jQuery)})},409:function(e,t,i){var o,r,n;!function(i,s){"use strict";r=[],o=i,n="function"==typeof o?o.apply(t,r):o,!(void 0!==n&&(e.exports=n))}(function(){"use strict";var e,t=window.kendo,i=t.ui;return function(o,r){if(i.AssetManager&&(e=i.AssetManager.prototype.options,e.messages=o.extend(!0,e.messages,{toolbar:{upload:"Mettre en ligne",delete:"Supprimer",filter:"Collection: ",search:"Recherche"},tabs:{default:"Projet"},data:{defaultName:"Chargement...",defaultImage:""}})),i.Explorer&&(e=i.Explorer.prototype.options,e.messages=o.extend(!0,e.messages,{empty:"Rien à afficher"})),i.MediaPlayer&&(e=i.MediaPlayer.prototype.options,e.messages=o.extend(!0,e.messages,{play:"Jouer/Pauser",mute:"Avec/Sans son",full:"Plein écran",notSupported:"Fichier non supporté"})),i.MultiInput&&(e=i.MultiInput.prototype.options,e.messages=o.extend(!0,e.messages,{delete:"Effacer"})),i.Navigation&&(e=i.Navigation.prototype.options,e.messages=o.extend(!0,e.messages,{empty:"Rien à afficher"})),i.PlayBar&&(e=i.PlayBar.prototype.options,e.messages=o.extend(!0,e.messages,{empty:"Rien à afficher",page:"Page",of:"de {0}",first:"Aller à la première page",previous:"Aller à la page précédente",next:"Aller à la prochaine page",last:"Aller à la dernière page",refresh:"Rafraichîr",morePages:"Plus de pages"})),i.PropertyGrid&&(e=i.PropertyGrid.prototype.options,e.messages=o.extend(!0,e.messages,{property:"Propriété",value:"Valeur"})),i.Quiz&&(e=i.Quiz.prototype.options,e.messages=o.extend(!0,e.messages,{optionLabel:"Sélectionner..."})),i.Social&&(e=i.Social.prototype.options,e.messages=o.extend(!0,e.messages,{classroom:"Partager sur Google Classroom",facebook:"Partager sur Facebook",google:"Partager sur Google+",linkedin:"Partager sur LinkedIn",pinterest:"Partager sur Pinterest",twitter:"Partager sur Twitter"})),i.Stage&&(e=i.Stage.prototype.options,e.messages=o.extend(!0,e.messages,{contextMenu:{delete:"Supprimer",duplicate:"Dupliquer"},noPage:"Veuillez ajouter ou sélectionner une page"})),i.StyleEditor&&(e=i.StyleEditor.prototype.options,e.messages=o.extend(!0,e.messages,{columns:{name:"Nom",value:"Valeur"},toolbar:{create:"Nouveau",destroy:"Effacer"},validation:{name:"Nom de style manquant",value:"Valeur manquante"}})),window.kidoju){var n,s,a=window.kidoju,l=a.adapters,u=a.data,c=a.tools,d=a.Tool;l&&l.CharGridAdapter&&(l.CharGridAdapter.prototype.messages={layout:"<h3>Concevez la grille</h3><p>Chaque caractère saisi dans la grille est verrouillé et ne peut être modifié  en mode d'exécution.</p><p>Utilisez le caractère `{0}` pour désigner les cellules vides.</p>",solution:"<h3>Saisissez la solution</h3><p>Utilisez les caractères autorisés de la liste blanche, i.e. `{0}`.</p>"}),u&&u.Page&&(u.Page.prototype.messages={emptyPage:"La page {0} ne doit pas être vide.",minConnectors:"Au moins {0} Connecteurs sont nécessaires pour faire une question en page {1}.",missingDraggable:"Des Étiquettes et Images déplaçables sont requis pour la/les Zone(s) de Dépôt en page {0}.",missingDropZone:"Une Zone de Dépôt est requise pour les Étiquettes et Images déplaçables en page {0}.",missingLabel:"Une Étiquettes est recommandée en page {0}.",missingMultimedia:"Un élément multimédia (Image, Audio, Vidéo) est recommandé en page {0}.",missingQuestion:"Une question est recommandé en page {0}.",missingInstructions:"Des instructions sont recommandées en page {0}.",missingExplanations:"Des explications sont recommandées en page {0}."}),u&&u.Stream&&(u.Stream.prototype.messages={duplicateNames:"Supprimez les composants utilisant le même nom `{0}` en pages {1}",minPages:"Il faut au moins {0} pages pour pouvoir publier.",minQuestions:"Il faut au moins {0} questions pour pouvoir publier.",typeVariety:"On recommande l'usage d'au moins {0} types de questions (Choix Multiple, Boîte de Texte, Connecteurs ou autre).",qtyVariety:"On recommande plus de variété quand {0:p0} des questions sont du type {1}."}),d&&d.constructor&&"Function"===d.constructor.name&&(d.prototype.i18n=o.extend(!0,d.prototype.i18n,{tool:{top:{title:"Pos. Haut"},left:{title:"Pos. Gauche"},height:{title:"Hauteur"},width:{title:"Largeur"},rotate:{title:"Rotation"}},dialogs:{ok:{text:'<img alt="icon" src="https://cdn.kidoju.com/images/o_collection/svg/office/ok.svg" class="k-image">OK'},cancel:{text:'<img alt="icon" src="https://cdn.kidoju.com/images/o_collection/svg/office/close.svg" class="k-image">Annuler'}},messages:{invalidAltText:"Un(e) {0} en page {1} nécessite un texte alternatif dans les attributs d'affichage.",invalidAudioFile:"Un(e) {0} en page {1} nécessite un fichier mp3 dans les attributs d'affichage.",invalidColor:"Un(e) {0} on page {1} a une couleur invalide dans les attributs d'affichage.",invalidData:"Un(e) {0} en page {1} nécessite des valeurs dans les attributs d'affichage.",invalidDescription:"Un(e) {0} nommé(e) `{1}` en page {2} nécessite une question dans la logique de test.",invalidDropValue:"Une {0} en page {1} nécessite une valeur de dépôt dans la logique de test.",invalidFailure:"Un(e) {0} nommé(e) `{1}` en page {2} a un score d'échec supérieur au score d'omission ou zéro dans la logique de test.",invalidFormula:"Un(e) {0} on page {1} nécessite une formule dans les attributs d'affichage.",invalidImageFile:"Un(e) {0} en page {1} nécessite un fichier image dans les attributs d'affichage.",invalidSolution:"Un(e) {0} nommé(e) `{1}` en page {2} nécessite une solution dans la logique de test.",invalidStyle:"Un(e) {0} en page {1} a un style invalide dans les attributs d'affichage.",invalidSuccess:"Un(e) {0} nommé(e) `{1}` en page {2} a un score de succès inférieur au score d'omission ou zéro dans la logique de test.",invalidText:"Un(e) {0} en page {1} nécessite un texte dans les attributs d'affichage.",invalidValidation:"Un(e) {0} nommé(e) `{1}` en page {2} nécessite une formule de validation dans la logique de test.",invalidVideoFile:"Un(e) {0} en page {1} nécessite un fichier mp4 dans les attributs d'affichage."}})),c instanceof t.Observable&&(c.audio instanceof d&&(c.checkbox.constructor.prototype.description="Lecteur Audio",n=c.audio.constructor.prototype.attributes,n.autoplay.title="Auto.",n.mp3.title="Fichier MP3",n.ogg.title="Fichier OGG"),c.chart instanceof d&&(c.chart.constructor.prototype.description="Diagramme",n=c.chart.constructor.prototype.attributes,n.type.title="Type",n.title.title="Titre",n.categories.title="Catégories",n.values.title="Valeurs",n.legend.title="Légende",n.data.title="Données",n.style.title="Style"),c.chargrid instanceof d&&(c.chargrid.constructor.prototype.description="Character Grid",n=c.chargrid.constructor.prototype.attributes,n.blank.title="Vide",n.columns.title="Colonnes",n.layout.title="Mise en Page",n.rows.title="Lignes",n.whitelist.title="Caractères",n.gridFill.title="Fond de Grille",n.gridStroke.title="Contour de Grille",n.selectedFill.title="Fond Sélectionné",n.lockedFill.title="Fond Vérouillé",n.fontColor.title="Couleur Police",s=c.chargrid.constructor.prototype.properties,s.name.title="Nom",s.description.title="Question",s.solution.title="Solution",s.validation.title="Validation",s.success.title="Succès",s.failure.title="Échec",s.omit.title="Omission"),c.checkbox instanceof d&&(c.checkbox.constructor.prototype.description="Boîte à Cocher",n=c.checkbox.constructor.prototype.attributes,n.data.title="Valeurs",n.data.defaultValue="Option 1\nOption 2",n.groupStyle.title="Style Groupe",n.itemStyle.title="Style Element",n.selectedStyle.title="Style Sélection",s=c.checkbox.constructor.prototype.properties,s.name.title="Nom",s.description.title="Question",s.solution.title="Solution",s.validation.title="Validation",s.success.title="Succès",s.failure.title="Échec",s.omit.title="Omission"),c.connector instanceof d&&(c.connector.constructor.prototype.description="Connecteur",n=c.connector.constructor.prototype.attributes,n.color.title="Couleur",s=c.connector.constructor.prototype.properties,s.name.title="Nom",s.description.title="Question",s.solution.title="Solution",s.validation.title="Validation",s.success.title="Succès",s.failure.title="Échec",s.omit.title="Omission"),c.dropzone instanceof d&&(c.dropzone.constructor.prototype.description="Zone de Dépot",n=c.dropzone.constructor.prototype.attributes,n.center.title="Centrer",n.text.defaultValue=!1,n.style.title="Style",n.text.title="Texte",n.text.defaultValue="Veuillez déposer ici.",s=c.dropzone.constructor.prototype.properties,s.name.title="Nom",s.description.title="Question",s.solution.title="Solution",s.validation.title="Validation",s.success.title="Succès",s.failure.title="Échec",s.omit.title="Omission"),c.image instanceof d&&(c.image.constructor.prototype.description="Image",n=c.image.constructor.prototype.attributes,n.alt.title="Texte",n.alt.defaultValue="Image",n.src.title="Source",n.src.defaultValue="cdn://images/o_collection/svg/office/painting_landscape.svg",n.style.title="Style",s=c.image.constructor.prototype.properties,s.draggable.title="Déplaçable",s.dropValue.title="Valeur"),c.label instanceof d&&(c.label.constructor.prototype.description="Étiquette",n=c.label.constructor.prototype.attributes,n.style.title="Style",n.text.title="Texte",n.text.defaultValue="Label",s=c.label.constructor.prototype.properties,s.draggable.title="Déplaçable",s.dropValue.title="Valeur"),c.mathexpression instanceof d&&(c.mathexpression.constructor.prototype.description="Expression Mathématique",n=c.mathexpression.constructor.prototype.attributes,n.formula.title="Formule",n.formula.defaultValue="\\sum_{n=1}^{\\infty}2^{-n}=1",n.inline.title="Aligné",n.inline.defaultValue=!1,n.style.title="Style"),c.quiz instanceof d&&(c.quiz.constructor.prototype.description="Question à Choix Multiple",n=c.quiz.constructor.prototype.attributes,n.data.title="Valeurs",n.data.defaultValue="Vrai\nFaux",n.groupStyle.title="Style Groupe",n.itemStyle.title="Style Element",n.mode.title="Mode",n.selectedStyle.title="Style Sélection",s=c.quiz.constructor.prototype.properties,s.name.title="Nom",s.description.title="Question",s.solution.title="Solution",s.validation.title="Validation",s.success.title="Succès",s.failure.title="Échec",s.omit.title="Omission"),c.table instanceof d&&(c.table.constructor.prototype.description="Table Statique",n=c.table.constructor.prototype.attributes,n.columns.title="Colonnes",n.rows.title="Lignes",n.data.title="Données"),c.textarea instanceof d&&(c.textarea.constructor.prototype.description="Aire de Texte",n=c.textarea.constructor.prototype.attributes,n.style.title="Style",s=c.textarea.constructor.prototype.properties,s.name.title="Nom",s.description.title="Question",s.solution.title="Solution",s.validation.title="Validation",s.success.title="Succès",s.failure.title="Échec",s.omit.title="Omission"),c.textbox instanceof d&&(c.textbox.constructor.prototype.description="Boîte de Texte",n=c.textbox.constructor.prototype.attributes,n.mask.title="Masque",n.style.title="Style",s=c.textbox.constructor.prototype.properties,s.name.title="Nom",s.description.title="Question",s.solution.title="Solution",s.validation.title="Validation",s.success.title="Succès",s.failure.title="Échec",s.omit.title="Omission"),c.video instanceof d&&(c.video.constructor.prototype.description="Lecteur Vidéo",n=c.video.constructor.prototype.attributes,n.autoplay.title="Auto.",n.toolbarHeight.title="Haut. Commandes",n.mp4.title="Fichier MP4",n.ogv.title="Fichier OGV",n.wbem.title="Fichier WBEM"))}}(window.kendo.jQuery),window.kendo},i(310))}});
//# sourceMappingURL=app.culture.fr.chunk.js.map?v=0.2.76