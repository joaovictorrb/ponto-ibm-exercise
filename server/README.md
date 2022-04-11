# Adonis Server

## Setup
Manually clone the repo.

Create a database in your machine and set it on .env
Or
Rename .env.example to .env

and then run `npm install`.

### Must Do

Generate key for adonis
```js
adonis key:generate         //Generate secret key for the app
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

Run the factory/seeds
```js
adonis seed
```

User registered:
- Username: Student
- Email: student@gmail.com
- Password: Student123

### RUN SERVER

To start the service, use the following command:
```
adonis serve --dev
```