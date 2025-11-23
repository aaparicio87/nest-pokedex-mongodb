<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Pokemon API.

## Installation

```bash
$ pnpm install
```

## Start DB

```bash
$ docker-compose up -d
```

## Config environment variables

Copy the file __.env.sample__ to __.env__ 
and edit it with your own values.

## Running the app in development mode

```bash
$ pnpm run start:dev
```

## Start Seed

```bash
http://localhost:3001/api/v2/seed
```

## Stack
* NestJS
* MongoDB
* Docker

## Production Build

1. Copy the file __.env.sample__ to __.env.prod__ 
2. Edit it with your own values.
3. Create the new image 
```bash
$ docker-compose -f docker-compose.prdo.yaml --env-file .env.prod up 
--build
```
