## Simple user create and login system with express


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

To create a user: POST http://localhost:3000/users 
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