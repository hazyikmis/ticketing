To install typescript into the project
> npm install typescript ts-node-dev express @types/express
To activate typescript (creates "tsconfig.json"), under the project root folder, execute
> tsc --init
In order to run/start the app, add/change the "start" script inside the package.json like below:
> "start": "ts-node-dev src/index.ts"