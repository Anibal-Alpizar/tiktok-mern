FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

# docker build -t tiktok-mern .
# docker run --name server1 -p 5000:3000 tiktok-mern