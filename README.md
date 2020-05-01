### Local machine setup
- install NodeJS on your local machine (https://nodejs.org/en/)
- install docker-compose on your machine (https://docs.docker.com/compose/install/)

### Local project setup
- clone or download this repo
- open terminal (powershell etc.) in the project folder
- run `npm install`
- compile the app (look in package.json) `npm run build`
- if you get any tsc error you might need to install typescript globally (`npm i -g typescript`)
- run `docker-compose up`, this will create 3 containers mongo (port 27017), mongo-express (port 8081), demo-app (port 8888)

### Project details
- navigate to `localhost:8081` for mongo-express you will access the gui for mongo
- navigate to `localhost:8888/api-docs` for swagger documentation


## Credits

[Template](https://github.com/virgil-av/nodejs-express-mongoose-typescript-docker-api-example)
