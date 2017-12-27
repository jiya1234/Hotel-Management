"Hotel Manaagement System (Hotela)"

1.Go Into the client folder run "npm install" and then "npm start" to run dev server.
2.If some error comes about "node_modules/@types@lodash" delete the lodash from the path given and run "npm start again"
3.To change the database for login and registration go into config folder and in database.js file. Replace the db link from yours and then check authentication


"HOTEL MANAGEMENT SYSTEM"
1.User should first be registered into the system
2. User can be login according to the username and password he has registered with.
3.He can add reservations,update them and delete or disapprove any guest details in add reservation.
3.He can add room,roomtypes,their prices and can update and delete them too.
4. He can manage food items ordered, their prices and can update or cancel the orders at any time.
5.He can manage the billing/Paymenet procedure for food and room reserved, update and cancel at any time.
6.He can add housekeepers for housekeeping , can update their info and delete them at any time.

BACKEND: 
1.Api is in routes/authentication.js.
2.Api is for login,registration(since these two features have database connection rest all features are front-end in which we applied our own and some built-in functions).


Request FOR API(GET:LOCALHOST:8080/authentication/checkEmail/:email)
1. Route to check if user's email is available for registration,
No email? 
Response : { success: false, message: 'E-mail was not provided' }
2. (i) Search for user's e-mail in database(if err)
Response: { success: false, message: connection err }
(ii) Check if user's e-mail is taken
response: { success: false, message: 'E-mail is already taken' }
(iii) Check if email is available , no errors
response { success: true, message: 'E-mail is available' }





request(GET:LOCALHOST:8080/authentication/checkUsername/:username)
1. Route to check if user's username is available for registration,
No username ? 
Response : { success: false, message: 'username  was not provided' }
2. (i) Search for username in database(if err)
Response: { success: false, message: connection err }
(ii) Check if username is taken
response: { success: false, message: 'username is already taken' }
(iii) Check if username  is available , no errors
response { success: true, message: 'username  is available' }



request(POST:LOCALHOST:8080/authentication/login)
1. Check if username was provide(err)
res: { success: false, message: 'No username was provided' }
2.Check if password was provided (err)
res: { success: false, message: 'No password was provided.' }
3. if username exists in database
res:{ success: false, message: err }
4. if username was not found
res:{ success: false, message: 'Username not found.' }
5. if password is not a match
res: { success: false, message: 'Password invalid' }
6. if success
res: { success: true, message: 'Success!', token: token, user: { username: user.username } }

Rquest(POST:LOCALHOST:8080/authentication/register)
If email is not provided
Response: { success: false, message: 'You must provide an e-mail' }
2. If email is not provided
Respons :{ "success": "false", "message": "You must provide a username" } 
3. 2. If pasword is not provided
Respons :{ "success": "false", "message": "You must provide a password" }
4.if error is an error indicating duplicate account
Response: { success: false, message: 'Username or e-mail already exists' }
5.Check if error is a validation rror
..Check if validation error is in the email field
Response : { success: false, message: err.errors.email.message }
..Check if validation error is in the username field
Response: { success: false, message: err.errors.username.message } 
..Check if validation error is in the password field
Response: { success: false, message: err.errors.password.message } 
6. Return any other error not already covered
Response: { success: false, message: err }
7.Return error if not related to validation
response: { success: false, message: 'Could not save user'}
8. Return success
'Acount registered!' 