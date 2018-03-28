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
    //material
    npm install --save @angular/material @angular/cdk @angular/animations hammerjs
    
    

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
import 'web-animations-js';  // Run `npm install --save web-animations-js`.

installer web-animation et dans index.html ajouter ceci
<!-- pre-zone polyfills -->
<script src="node_modules/core-js/client/shim.min.js"></script>
<script src="node_modules/web-animations-js/web-animations.min.js"></script>

<!-- zone.js required by Angular -->
<script src="node_modules/zone.js/dist/zone.js"></script>

<!-- application polyfills -->
