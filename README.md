# Klenty Discussion App

### Things that I learned in this project are:
1. express-session
   1. We will use this session for to store the JWT token for user to authenticate
2. Cors
3. ErrorHandler
   1. For Handling exceptions and error
4. Created middleware for JWT authentication using express-jwt pkg.
5. Express-JWT is build on top of jsonwebtoken which can automatically set the request.payload
6. npm run dev for local dev.env environments and for heroku we will set it in heroku