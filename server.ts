const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();
require('dotenv').config();
const { auth, requiresAuth } = require('express-openid-connect');

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
app.use('/', require('./routes'));
app.use(auth({
      authRequired: false,
      auth0Logout: true,
      ISSUER_BASE_URL: process.env.ISSUER_BASE_URL,
      CLIENT_ID: process.env.BASE_URL,
      BASE_URL: process.env.CLIENT_ID,
      SECRET:process.env.SECRET
    })
  );
app.get('/', (req, res)=>{
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
  })
app.get('/profile', requiresAuth(), (req, res)=> {
  res.send(JSON.stringify(req.oidc.user));
});

const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected and server running on ${port}.`);
    });
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });