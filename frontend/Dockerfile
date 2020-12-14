FROM node:14
WORKDIR /usr/local/app
COPY ./frontend/package.json .
RUN npm install --silent
COPY ./frontend/public ./public
COPY ./frontend/src ./src
EXPOSE 3000
CMD ["npm", "start"]