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


## ENDPOINTS

### REGISTER NEW USER
- Method > POST
- {{URL}}/register

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
	"username": "usern",
	"email": "usern@gmail.com",
	"created_at": "2022-04-12 23:25:17",
	"updated_at": "2022-04-12 23:25:17",
	"userId": 2
}
```

### LOGIN
- Method > POST
- {{URL}}/login
- Body
{
	"email": "usern@gmail.com",
	"password": "usern123"
}

- Response
```json
{
	"type": "bearer",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTY0OTgxNjc0NCwiZXhwIjoxNjQ5ODIzOTQ0fQ.XveKAjZygT-00w6eoLD_htsCYZHP2nMlrlVUYWzHmoQ",
	"refreshToken": null
}
```

### VERIFY SESSION
- Method > POST
- {{URL}}/session
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

### GENERATE POINT
- Method > POST
- {{URL}}/newPointRegistry
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

### FETCH CURRENT DAY POINTS
- Method > GET
- {{URL}}/showPoints
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

### POST NEW DAILY REGISTRY
- Method > POST
- {{URL}}/newPointRegistry
- Token > JWT
- Body > Empty

 
```json
{
	"message": "Registro criado com sucesso",
	"name": "Created",
	"status": 201
}
```

### GET DAILY REGISTRY BY MONTH
- Method > GET
- {{URL}}/showPoints
- Params 
 - :month? OPTIONAL
- Token > JWT
- Body > Empty

- Response:
```json
[
	{
		"userId": 1,
		"username": "Student",
		"email": "student@gmail.com",
		"created_at": null,
		"updated_at": null,
		"registry": [
			{
				"registryId": 1,
				"user_id": 1,
				"registryReferalDate": "2022-11-04",
				"referalMonth": "ABRIL",
				"hoursExceeded": 1,
				"avaliableHours": 0.22,
				"created_at": null,
				"updated_at": null
			},
			{
				"registryId": 23,
				"user_id": 1,
				"registryReferalDate": "2022-04-12",
				"referalMonth": "ABRIL",
				"hoursExceeded": 0,
				"avaliableHours": -8,
				"created_at": "2022-04-12 14:19:40",
				"updated_at": "2022-04-12 14:19:40"
			}
		]
	}
]
```
