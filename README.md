Guide d'installation du projet

Bienvenue dans le projet Argent Bank !
Voici les instructions pour configurer et exécuter l'application en utilisant Docker.

Prérequis :
Avant de commencer, assurez-vous d'avoir installé les outils suivants :
Docker
Docker Compose (selon les systèmes d'exploitation peut-être inclus par défaut avec la mise en place de Docker - Vous pouvez vérifier votre version avec la commande => docker-compose --version )
Un accès au repository du projet

Étapes d'installation :
1_Cloner le repository :
git clone https://github.com/AlexiaFroment/P13_ArgentBank

2_Ouvrir Docker Desktop

3_Se positionner à la racine du projet : cd P13_ArgentBank

4_Lancer l'application avec Docker Compose :
docker-compose up --build

5_Accéder à l'application :
Une fois les conteneurs démarrés (les 3 vont se lancer en même temps, Mongo, Backend, Frontend)
Ouvrez votre navigateur et accèdez à l'URL indiquée dans les logs => http://localhost:5173/

Notes supplémentaires :
Vous pouvez tester la connexion à l'application avec :
Username : tony@stark.com
Password : password123
