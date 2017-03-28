FROM node:boron
 
# Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
#RUN ls -la /usr/src
# Install app dependencies
#COPY ./app/package.json /usr/src/app/
#RUN npm install
 
# Bundle app source
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/node_modules
COPY ./app /usr/src/app
WORKDIR /usr/src/app
RUN ls -la /usr/src/app
RUN npm install
RUN ls -la /usr/src/app

CMD [ "npm", "start" ]
