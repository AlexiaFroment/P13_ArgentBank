# Utiliser une image de base Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de configuration
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Installer les dépendances
RUN npm install -g pnpm
RUN pnpm install

# Copier le reste des fichiers
COPY . .

# Exposer le port 5173
EXPOSE 5173

# Commande pour démarrer le serveur de développement
CMD ["pnpm", "run", "dev"]