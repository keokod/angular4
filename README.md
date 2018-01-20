# angular4
projet angular4
#à l'installation mettre cette ligne dans .profil
export PATH=~/.npm-global/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/us$
#génerer un dossier .npm-global pour mettre vos libraire node

#mise en production 
ng build --target=production --base-href'/'
ng build --prod --base-href "https://USERNAME.github.io/REPOSITORY/"


npm uninstall -g angular-cli

npm uninstall --save-dev angular-cli

npm uninstall -g @angular/cli

    Clean up the cache

    npm cache clean

    Install angular globally

    npm install -g @angular/cli@latest

    local project setup if you have one

rm -rf node_modules

npm install --save-dev @angular/cli@latest

npm instal
===========
install semantic-ui
npm install semantic-ui --save
modifier le fichier angular-cli.json la racine du projet
      "styles": [
        "../node_modules/semantic-ui/dist/semantic.min.css",
	"../src/styles.css"
      ],
=======================
pour le cors mettre ceci dans le fichier php

<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
$data = json_decode(file_get_contents("php://input"));
===== 
problème d'install visualstudio faire 
apt-get install -f

====

POLYFILLE pour ie11

npm install --save web-animations-js
npm install yarn -g
apt --fix-broken install


décommanter src/polyfills.ts

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js';  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following for the Reflect API. */
import 'core-js/es6/reflect';

