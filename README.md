# angular4
pour les problème rx/js angular6, mettre cette commande:

PS C:\test> npm i rxjs-compat
+ rxjs-compat@6.2.0

projet angular4
#à l'installation mettre cette ligne dans .profil
export PATH=~/.npm-global/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/us$
#génerer un dossier .npm-global pour mettre vos libraire node

#mise en production 
ng build --target=production --base-href'/'
ng build --prod --base-href "https://USERNAME.github.io/REPOSITORY/"

problème de création de composant(se mettre dans le dossier voulous si c'est un sous comosant):
ng generate component heure --module=app.module

npm uninstall -g angular-cli

npm uninstall --save-dev angular-cli

npm uninstall -g @angular/cli

    Clean up the cache

    npm cache clean

    Install angular globally

    npm install -g @angular/cli@latest

    local project setup if you have one
    //material
    npm install --save @angular/material @angular/cdk @angular/animations hammerjs web-animations-js npm install rxjs-compat --save
    
    

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


créer un composant enant:

λ ng generate component tete/menu  --module=app
CREATE src/app/tete/menu/menu.component.html (23 bytes)
CREATE src/app/tete/menu/menu.component.spec.ts (614 bytes)
CREATE src/app/tete/menu/menu.component.ts (261 bytes)
CREATE src/app/tete/menu/menu.component.css (0 bytes)
UPDATE src/app/app.module.ts (786 bytes)
