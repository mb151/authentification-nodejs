# API Authentification Node JS
Ce projet vous donnerez une API d'authentification node js avec MongoDB comme base de données. 
Une fois le télécharger vous optimiserez du temps en continuant directement à implémenter les autres logiques de votre application.
le middlewares **auth** vous permettrez de Controller vos différentes routes qui nécessitent une authentification.

## Contenu du fichier .env
créer un fichier dont le nom est **.env** (sans extension) à la racine de ce projet dont le contenu est : 

```bash
ENV = /* environnement (DEVELOPPEMENT ou PRODUCTION */
DATABASE = /* mongodb://localhost/dbName */
PORT = /* numéro du port */
SALT= /* clé de chiffrement et déchiffrement de mot de passe (n'importe quel texte) */
SECRET= /* pour la génération du token qui permet d'accéder à une route verrouiller par le middleware auth (n'importe quel texte) */
```

## Installation

Télécharger le projet format ZIP ou via un terminal avec git clone.

```bash
git clone https://github.com/mb151/authentification-nodejs.git
cd authentification-nodejs/
npm install
npm start
```

## Utilisation

###### Pour la création d'un nouvel utilisateur.
![Register Image](https://github.com/mb151/authentification-nodejs/blob/main/blob/register.JPG)

###### Pour la connexion d'un utilisateur existant.
![Login Image](https://github.com/mb151/authentification-nodejs/blob/main/blob/login.JPG)
