# nodejs-graphqpl-basic
NodeJS GraphQL retrieve data from 3rd API

## Run

```
node server.js
```

## Run via Docker

### Build Docker Image

```
docker build -t <image-name> <relative-path-to-your-dockerfile>
```

In this case:

```
docker build -t graphql-basic .
```

Get list of images

```
docker images
```
### Run Docker Container

Default command: `docker container run <image-name>`

```
docker container run -p 4000:8081  graphql-basic
```

List running container

```
docker ps
```

List all containers

```
docker ps -a
```

Enter the containers

```
docker exec -ti <container id> /bin/bash
```

Inspect a container

```
docker inspect <container id>
```
