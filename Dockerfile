FROM node:18 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

# Bundle app source
COPY . .

EXPOSE 1337
CMD [ "npm", "run", "build" ]

# stage 2 - build the final image and copy the react build files
FROM nginx:1.23.3-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
