FROM node:16

WORKDIR /api-test

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

RUN npm install

RUN npx prisma generate

COPY . .

ENV PORT=4002

EXPOSE 4002

CMD npm start