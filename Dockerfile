FROM node:14.19.1
WORKDIR /home/app/
# RUN npm install yarn -g
COPY . .
CMD ["sh", "-c", "yarn;yarn start"]
EXPOSE 3000