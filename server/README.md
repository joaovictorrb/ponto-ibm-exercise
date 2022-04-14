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
[   
    {
		"pointId": 17,
		"user_id": 1,
		"date": "2022-04-12",
		"hour": "12:45",
		"unixTimeStampMilli": "1649767527971",
		"created_at": "2022-04-12 09:45:28",
		"updated_at": "2022-04-12 09:45:28"
	},
	{
		"pointId": 18,
		"user_id": 1,
		"date": "2022-04-12",
		"hour": "12:45",
		"unixTimeStampMilli": "1649767529257",
		"created_at": "2022-04-12 09:45:29",
		"updated_at": "2022-04-12 09:45:29"
	},
	{
		"pointId": 19,
		"user_id": 1,
		"date": "2022-04-12",
		"hour": "12:45",
		"unixTimeStampMilli": "1649767530160",
		"created_at": "2022-04-12 09:45:30",
		"updated_at": "2022-04-12 09:45:30"
	},
	{
		"pointId": 20,
		"user_id": 1,
		"date": "2022-04-12",
		"hour": "12:45",
		"unixTimeStampMilli": "1649767531907",
		"created_at": "2022-04-12 09:45:31",
		"updated_at": "2022-04-12 09:45:31"
	}
]
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
[
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
]
```
