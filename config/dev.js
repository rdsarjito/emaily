const dotenv = require('dotenv').config({ path: './.env.development' }).parsed;
module.exports = {
  googleClientID: dotenv.GOOGLE_CLIENT_ID,
  googleClientSecret: dotenv.GOOGLE_CLIENT_SECRET,
  facebookClientID: dotenv.FACEBOOK_CLIENT_ID,
  facebookClientSecret: dotenv.FACEBOOK_CLIENT_SECRET,
  mongoURI: dotenv.MONGO_URI,
  cookieKey: dotenv.COOKIE_KEY,
  stripePublishableKey: dotenv.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: dotenv.STRIPE_SECRET_KEY,
}; 