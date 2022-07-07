# Node Microservices with React and Docker Compose

To deploy the project, please make sure you have `docker` and `docker compose` installed


## Development

Run following command in root directory of project 

```
docker compose up
```

You can now visit `localhost:3000` to test application in development environment


## Production

Run following command in root directory of project 

```
docker compose -f docker-compose.prod.yml up
```

You can now visit `localhost` to test application in production environment


## Testing

To run unit tests for APIs, please navigate to `server` directory and run following command

```
npm run test
```


## Build

To create a build for server, navigate to server directory and run

```
npm run build
```


## Linting

To check linting problems in API, run following command

```
npm run lint:check
```

, and to fix these problems, you can run

```
npm run lint:fix
```
