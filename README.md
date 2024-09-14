# ionic-boilerplate

A boilerplate to start a prohject with Ionic 5 with Angular 9 and TypeScript.

This project includes the following packages:
- Ionic
- Vite
- Vue
- ESLint
- Vitest
- Cypress
- TypeScript
- Husky
- Docker
- Docker Compose
- Makefile

## Prerequisites

The following dependencies are required:

- Node v20.10.0
- NPM v10.2.3
- Inoic CLI v7.2.0

The following dependencies are optional, but are still very convenient:

- Docker v25.0.3
- Docker Compose v2.24.6
- GNU Make ^3.81

## Configuration

This service can be configured by a .env file. Run the following command:

```bash
cp env_example .env
```

to copy the `env_example` content into the `.env` file, then modify the environment variables.

The env_example has the following env vars:
- `DOCKER_CONTAINER_NAME` (optional, required for docker only): the docker container name. For example, `ionic-boilerplate`. It's a required env var only to run the dockerized app.
- `DOCKER_IMAGE_NAME` (optional, required for docker only): the docker image name. For example, `ionic-boilerplate`. It's a required env var only to run the dockerized app.
- `DOCKER_PORT` (optional, required for docker only): the listening port of the docker container. For example, `8080`, or `8888`. It's a required env var only to run the dockerized app.

## Preparation

This service uses an Husky pre-commit. The pre-commit executes a code linting and code formatting before each commit.

Prepare the `./husky/` folder with the following command:

```bash
npm run husky:prepare
```

Sometimes, you might even need to set the Husky Pre-Commit manually... don't worry, this is the right command:

```bash
npx husky add .husky/pre-commit "..."
```

The contentof the .husky/pre-commit/ should be the following:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run format
npm run lint
npm run test:unit
```

## Installation

```bash
npm install
# or
npm i
```

## Running the app

```bash
ionic serve
```

## Running the dockerized app

Build the docker image with the following command:

```bash
docker build -t ${DOCKER_IMAGE_NAME} .
# or
make docker-build
```

Then, run the dockerized app:

```bash
docker-compose up -d
# or
make docker-up
```

## Stopping the dockerized service

Stop the dockerized service:

```bash
docker-compose down
# or
make docker-down
```

## Inspect the dockerized service

See container logs:

```bash
docker-compose logs -f ${DOCKER_CONTAINER_NAME} --tail=50
# or
make docker-logs
```

## Code Linting

```bash
npm run lint
```

## Code Formatting

```bash
npm run format
```

## Building

```bash
npm run build
```

## Unit Testing

```bash
npm run test:unit
```

## E2E Testing

First, you need to run the app and it must be listen to the same port specified in the `baseUrl` property of the `cypress.config.ts` file. You can run this app on a specific port with the following command:

```bash
ionic serve --port 8080 # 8080 is an example only, you can use other port
```

Next, you can run the E2E test with the following command:

```bash
npm run test:e2e
```

## Cleaning

To clear build files, run one of the following commands:

```bash
# for Unix-based (like Linux Ubuntu, or Mac OS) OS
rm -rf dist/

# for Windows
rm -r dist/
```

## Links

- [Node](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Vue](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU Make](https://www.gnu.org/software/make/)
- [Inoic](https://ionicframework.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ionic CLI](https://github.com/ionic-team/ionic-cli)

## Contacts

Don't hesitate to contact me for any info, bugs, or improvements! Below are my contacts:

- [GitHub](https://github.com/chralex00)
- [Email](mailto:christian.alessandro.atzeni.00@outlook.com)