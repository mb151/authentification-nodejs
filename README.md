# authentification-nodejs
Ce projet vous donnerez une API d'authentification node js avec MongoDB comme base de données.
le middlewares (auth) vous permettrez de controller vos differentes routes qui neccessitent une authentification.

## Contenu du fichier .env
créer un fichier .env à la racine de ce projet dont le contenu est : 

```bash
ENV = /* environnement (DEVELOPPEMENT ou PRODUCTION */
DATABASE = /* mongodb://localhost/dbName */
PORT = /* numero du port */
SALT= /* clé de chiffrement et dechiffrement de mot de passe (n'importe quel text) */
SECRET= /* pour la génération du token qui permet d'acceder à une route verouiller par le middleware auth (n'importe quel text)  */
```

## Installation

Telecharger le projet format ZIP ou via un terminal avec git clone 

```bash
git clone https://github.com/mb151/authentification-nodejs.git
cd authentification-nodejs/
npm install
npm start
```

## Utilisation

