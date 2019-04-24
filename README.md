# hacktivoverflow app
built with Express, Mongoose, and TDD

| Route           | HTTP   | Description                         | Authen | Authorz  |
|-----------------|--------|-------------------------------------|--------|----------|
| /register       | POST   | Register new user                   | no     | no       |
| /login          | POST   | Login user                          | no     | no       |
| /glogin         | POST   | Login user by google account        | no     | no       |
| /questions      | GET    | Get all question documents          | no     | no       |
| /questions      | POST   | Create a question document          | yes    | no       |
| /questions/:id  | GET    | Get a question document             | no     | no       |
| /questions/:id  | PUT    | Update all question doc fields      | yes    | authUser |
| /questions/:id  | PATCH  | Update some question doc fields     | yes    | authUser |
| /questions/:id  | DELETE | Delete a question document          | yes    | authUser |
| /user/questions | GET    | Get all authUser question documents | yes    | no       |

## Usage
Make sure you have Node.js and npm installed in your computer and then run these commands:
```console
$ npm install
$ npm start
```
Make sure you have set all required your .env parameters
<br>(key reference: .env.example)

Access the REST API via `http://localhost:3000`