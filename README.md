# GDCLobby

## TODO

- Faire le README mais j'ai la flemme.
- Trouver un vrai nom

## Déploiement

### Configurer GDCLobby

- Mettre en place la base de données (fichier `.sql` disponible dans `api/db`).
- Lancer le serveur de la base de données.
- Ajouter la/les mission(s).
- Configurer le `.env` de l'API (fichier `.sample-env` disponible dans `api/` pour aider à la configuration).
  - Note pour Docker : le `.env` doit être placé au même endroit que les `docker-compose*.yaml`. Le même `.sample-env` est disponible à cet endroit.
- Lancer l'API (`cd api && npm ci && npm run start:prod`). API disponible au port `3000`.
- Lancer l'APP (`cd app && npm ci && npm run start`). App disponible au port `80`.
  
### Configurer l'admin

- Créez vous un compte (méthode au choix : DB, API ou App).
- Connectez vous au gestionnaire de base de données (phpmyadmin, adminer ou autre).
- Dans la table `player`, passez la variable `isAdmin` de votre compte à 1.

### Notes

Si c'est pas clair ou pas assez précis, me MP discord : OxyTom#1831