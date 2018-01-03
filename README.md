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
        "../node_modules/semantic-ui-css/semantic.css",
        "../node_modules/semantic-ui/dist/semantic.min.css",
        "styles.css"
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
