## Description

Simple project from [first crash course](https://www.youtube.com/playlist?list=PLDB5eRhbHd0zcMv6U2J3Wg_U2Ic95mabQ)

## Installation

- Install node dependencies

```bash
$ npm install
```

- Setup db and run it

```bash
docker compose up -d
```

- Run db migrations

```bash
npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
