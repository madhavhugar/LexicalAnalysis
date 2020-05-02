## Lexical Analysis

Currently MongoDB connections and schema are defined, but the non-lexical words are fetched from a local file

### Local Setup

- Install nvm
- run `nvm install 10.16`
- run `nvm use 10.16`
- run `git clone https://github.com/madhavhugar/LexicalAnalysis.git`
- expose env vars 
  - `cp .env.example .env`
  - `yarn setenv`
- install dependencies `yarn install`
- run `yarn start`

### Docker setup

- Install Docker & docker-compose
- Install nvm
- run `nvm install 10.16`
- run `nvm use 10.16`
- run `git clone https://github.com/madhavhugar/LexicalAnalysis.git`
- install dependencies `yarn install`
- compile the app `yarn build`
- if you get any tsc error you might need to install typescript globally (`npm i -g typescript`)
- run `docker-compose up`, 
  - mongo (port 27017)
  - mongo-express (port 8081)
  - lexical-app (port 8888)

### Project details

- navigate to `localhost:8081` for mongo-express you will access the gui for mongo
- navigate to `localhost:8888/` for swagger documentation
- navigate to `localhost:8888/complexity` for lexical analysis APIs


### Test coverage report

![alt](./coverage-report.png)
