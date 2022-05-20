# TM (Task manager) - Ebytr  backend :batedor:
## _Node API developed for simulation of stage of the Technical Challenge, of the selection process for the Vacancy of Person Developer Jr at Ebytr_ :batedor: Career blitz :batedor:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/findCarolinaCosta/TM-backend)
[![MIT LICENSE](https://camo.githubusercontent.com/c6239caa38945e7693646486b0337744e4bd84d52807a7a1756d596a0e13676a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f65617379626173652f65617379626173652d7265616374)](https://github.com/findCarolinaCosta/TM-backend/blob/main/LICENSE)

This application has task crud routes for consumption from [front-end](https://github.com/findCarolinaCosta/TM-frontend) of [task manger](https://github.com/findCarolinaCosta/TM-fullstack) project.

- ✨ Nice ✨

## Features

- POST '/task';
- GET '/tasks';
- PUT '/task/:id';
- DELETE '/task/:id';
  
- POST '/user'; *_Not available yet_
- GET '/user'; *_Not available yet_
- PUT '/user/:id'; *_Not available yet_
- DELETE '/user/:id'; *_Not available yet_
  
- API documentation with swagger at '/docs' route;

## Tech Infos

In Task manager project, following technologies are used:

- [NodeJS](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Prisma](https://www.prisma.io/) - Prisma helps app developers build faster and make fewer errors with an open source database toolkit.
- [MYSQL](https://www.mysql.com/) MYSQL is database management system.

## Installation

NFC Node API requires [NPM](https://www.npmjs.com/) v6+ or [YARN](https://yarnpkg.com/) to run.

Make a git clone of the repository.
```
git clone https://github.com/findCarolinaCosta/TM-backend.git
```

### Create database, run migrations:

Use npm:
```
npm run db:create
```

Use yarn:
```
yarn db:create
```

### Reset database ⚠ , it will drop the database and will use the original information:

Use npm:
```
npm run db:reset
```

Use yarn:
```
yarn db:reset
```

### Command that populates database with dummy data:

Use npm:
```
npm run db:seed
```

Use yarn:
```
yarn db:seed
```

### View database:

Use npm:
```
npm run db:show
```

Use yarn:
```
yarn db:show
```

### Additional configuration
- Create file `.env`;
- Copy data below or data from `.env-example` file and paste into the `.env` file;
- Fill `.env` file with information for data connection, example used with dummy data (mysql):

```
DATABASE_URL=mysql://UR-USER:UR-PASSWORD@HOST:PORT/DATABASE
PORT=3002
```

| Name     | Placeholder | Description                                               |   |   |
|----------|-------------|-----------------------------------------------------------|---|---|
| Host     | HOST        | IP address/domain of your database server, e.g. localhost |   |   |
| Port     | PORT        | Port on which your database server is running, e.g. 5432  |   |   |
| User     | USER        | Name of your database user, e.g. janedoe                  |   |   |
| Password | PASSWORD    | Password for your database user                           |   |   |
| Database | DATABASE    | Name of the database you want to use, e.g. mydb           |   |   |


* fonte: https://www.prisma.io/docs/concepts/database-connectors/mysql


### Install the dependencies and devDependencies and start the server.

Use npm:
```sh
cd TM-backend &&
npm install &&
npm start
```

Use yarn:
```sh
cd TM-backend &&
yarn &&
yarn start
```

- Open any browser `http://HOST:PORT` (infos defined in `.env` file)

Command for jest unit testing (with test coverage feedback):

Use npm
```
npm test
```

Use yarn
```
yarn test
```


- Delete the .git folder to start with a new history.

## Project report
This project was developed as part of simulation stage of technical challenge and technical interview.
Initiative: Career Blitz at Trybe :batedor:
- [Database diagram]()  *_Not available yet_

## Status report
:waning_gibbous_moon: In progress

## License

MIT
