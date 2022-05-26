FROM node

RUN mkdir -p /home/node/app/node_modules
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app
#USER node
COPY ./src ./
USER node

RUN npm install
EXPOSE 3000
#COPY --cown=node:node . . 
CMD ["npm","start"]



