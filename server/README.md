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

### GENERATE POINT

- {{URL}}/:userId/newPointRegistry
 - Params > :userId
 - Body > Empty
 - Método > POST

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

- {{URL}}/:userId/showPoints
 - Params > :userId
 - Body > Empty
 - Método > GET

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

### GET DAILY REGISTRY

### POST NEW DAILY REGISTRY
- {{URL}}/:userId/newPointRegistry
 - Params > :userId
 - Body > Empty
 - Método > POST
 
```json
{
	"message": "Registro criado com sucesso",
	"name": "Created",
	"status": 201
}
```
