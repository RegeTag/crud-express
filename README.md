## Simple User CRUD with express


# Initial steps:

Make sure to install all the dependencies by running :
```
npm install

#or

yarn
```

After installing dependencies, you'll need to run all migrations by the following command:

```
npm run cli migration:run

#or

yarn cli migration:run
```


# Routes

You can import all routes on your insomnia with "InsomniaRoutes.json"

Create User
---

POST http://localhost:3000/users 
with a json body: 
``` json
{
	"firstName": "",
	"lastName": "",
	"email": "",
	"login": "",
	"password": ""
}
```

Return status 201

```json
{
	"message":"User created!"
}
```

----


Update user
---
PUT http://localhost:3000/users/:id 
with a json body:
```json
{
	"newFirstName":"",
	"newLastName":"",
	"currentPassword":""
}
```

Return status 200
```json
{
  "message": "User updated with success!"
}
```
----


Get all users
---

GET http://localhost:3000/users

```json
[
  {
    "id":,
    "first_name": "",
    "last_name": "",
	"created_at": ""
  }
]
```
return status 200

---


Get one user by id
---

GET http://localhost:3000/users/:id

```json
{
  "id": ,
  "first_name": "",
  "last_name": "",
  "created_at": ""
}

```
return status 200

----

Delete user by id
---

DELETE http://localhost:3000/users/:id
```json
{
  "password":""
}
```

return status 200
```json
{
  "message":"User deleted!"
}
```