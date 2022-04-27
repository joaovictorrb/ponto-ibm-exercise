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

- Username: usern
- Email: usern@gmail.com
- Password: usern123

### RUN SERVER

To start the service, use the following command:

```
adonis serve --dev
```

</br>

## ENDPOINTS

</br>

### REGISTER NEW USER - {{URL}}/register

- Method > POST
- Body

```json
{
  "username": "usern",
  "email": "usern@gmail.com",
  "password": "usern123"
}
```

- Response:

```json
{
  "message": "Usuário criado com sucesso!",
  "name": "SUCESSO",
  "status": 201
}
```

</br>

### LOGIN - {{URL}}/login

- Method > POST
- Body

```json
{
  "email": "usern@gmail.com",
  "password": "usern123"
}
```

- Response

```json
{
  "type": "bearer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTY0OTgxNjc0NCwiZXhwIjoxNjQ5ODIzOTQ0fQ.XveKAjZygT-00w6eoLD_htsCYZHP2nMlrlVUYWzHmoQ",
  "refreshToken": null
}
```

</br>

### VERIFY SESSION - {{URL}}/session

- Method > POST
- Token > JWT
- Body > Empty

- Response

```json
{
  "userId": 2,
  "username": "usern",
  "email": "usern@gmail.com",
  "created_at": "2022-04-12 23:25:17",
  "updated_at": "2022-04-12 23:25:17"
}
```

</br>

### GENERATE POINT - {{URL}}/newPointRegistry

- Method > POST
- Token > JWT
- Body > Empty

- Response:

```json
{
  "flagIsEntryPoint": false,
  "message": "Ponto criado com sucesso",
  "name": "Created",
  "status": 201
}
```

</br>

### FETCH CURRENT DAY POINTS - {{URL}}/showPoints

- Method > GET
- Token > JWT
- Body > Empty

- Response:

```json
{
  "userId": 1,
  "username": "usern",
  "points": [
    {
      "pointId": 9,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": true
    },
    {
      "pointId": 10,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": false
    },
    {
      "pointId": 11,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": true
    },
    {
      "pointId": 12,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": false
    },
    {
      "pointId": 13,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": true
    },
    {
      "pointId": 14,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": false
    },
    {
      "pointId": 15,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": true
    },
    {
      "pointId": 16,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": false
    },
    {
      "pointId": 17,
      "date": "2022-04-14",
      "hour": "13:27",
      "flagIsEntry": true
    },
    {
      "pointId": 18,
      "date": "2022-04-14",
      "hour": "13:36",
      "flagIsEntry": false
    },
    {
      "pointId": 19,
      "date": "2022-04-14",
      "hour": "13:36",
      "flagIsEntry": true
    },
    {
      "pointId": 20,
      "date": "2022-04-14",
      "hour": "13:36",
      "flagIsEntry": false
    },
    {
      "pointId": 21,
      "date": "2022-04-14",
      "hour": "13:36",
      "flagIsEntry": true
    },
    {
      "pointId": 22,
      "date": "2022-04-14",
      "hour": "13:36",
      "flagIsEntry": false
    },
    {
      "pointId": 23,
      "date": "2022-04-14",
      "hour": "13:36",
      "flagIsEntry": true
    },
    {
      "pointId": 24,
      "date": "2022-04-14",
      "hour": "13:36",
      "flagIsEntry": false
    }
  ]
}
```

</br>

### POST NEW DAILY REGISTRY - {{URL}}/registry

- Method > POST
- Token > JWT
- Body > Empty

-Response

```json
{
  "message": "Registro criado com sucesso",
  "name": "Created",
  "status": 201
}
```

</br>

### {{URL}}/registry/:month? - GET DAILY REGISTRY BY MONTH

- Method > GET
- Params
- :month? OPTIONAL
- Token > JWT
- Body > Empty

- Response:

```json
{
	"userId": 2,
	"username": "usern",
	"email": "usern@gmail.com",
	"created_at": "2022-04-12 23:25:17",
	"updated_at": "2022-04-12 23:25:17",
	"registry": [
		{
			"registryId": 24,
			"user_id": 2,
			"registryReferalDate": "2022-04-13",
			"referalMonth": "ABRIL",
			"hoursExceeded": 0,
			"avaliableHours": -8,
			"created_at": "2022-04-12 23:45:07",
			"updated_at": "2022-04-12 23:45:07"
		}
	]
}
```
