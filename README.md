
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
Projet : Gestion des Parrainages de Candidature d'Élections Présidentielles pour le Sénégal

Dans le cadre de la modernisation des procédures administratives relatives aux élections au Sénégal, ce projet vise à numériser le processus de gestion des parrainages, une étape cruciale et fastidieuse. Actuellement réalisée à l'aide de formulaires physiques, la gestion des parrainages sera désormais effectuée de manière électronique, facilitant ainsi le processus pour toutes les parties impliquées.

Le projet se divise en plusieurs phases clés :

1.Chargement de la liste des électeurs : .Importation du fichier électoral au format CSV via une interface web sécurisée. .Contrôle de l'intégrité et du format du fichier électoral à l'aide de fonctions PLSQL. .Validation du fichier pour l'ajouter à une table persistante.

2.Saisie de la liste des candidats : .Interface web permettant la saisie et la vérification des informations des candidats sollicitant un parrainage. .Enregistrement des informations complètes du candidat avec génération d'un code de sécurité pour confirmation.

3.Ouverture de la période de parrainage : .Enregistrement des dates de début et de fin des parrainages via une interface web simple. .Contrôle de la cohérence des dates et activation automatique des fonctionnalités en fonction des dates enregistrées.

4.Enregistrement du profil du parrain : .Création d'un compte en ligne pour chaque électeur souhaitant parrainer un candidat, avec vérification des informations et envoi d'un code d'authentification. .Enregistrement d'un parrainage : .Processus d'enregistrement du parrainage en ligne par chaque électeur vérifié, incluant la sélection du candidat à parrainer et la vérification à deux facteurs.

5.Suivi des parrainages : .Interface web dédiée aux candidats pour suivre quotidiennement l'évolution de leurs parrainages, avec accès sécurisé via code d'authentification.

Voici la liste des differentes fonctionnalites a implementer.

INSTALLATION

Clonez ce dépôt de projet sur votre machine locale avec la commande suivante :

git clone https://github.com/annemariediouf/gestion_des_parrainages.git

AUTRICES

.annemariediouf

.awalo25

.SarrMareme

.khadyndour

