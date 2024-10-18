FROM node:18

# Installe pnpm globalement
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Copie les fichiers de configuration de pnpm
COPY pnpm-lock.yaml ./
COPY package.json ./

# Installe les dépendances avec pnpm
RUN pnpm install

# Copie le reste du code
COPY . .

EXPOSE 3001
CMD ["pnpm", "run", "server"]