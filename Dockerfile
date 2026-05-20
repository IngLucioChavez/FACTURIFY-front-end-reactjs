FROM node:20

WORKDIR /var/www/app

# Copiar primero archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm i  && npm i @tailwindcss/vite

# Copiar resto del proyecto
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]