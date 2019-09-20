const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  googleVision: process.env.GOOGLE_API_KEY,
  websterKey: process.env.WEBSTER_KEY,
//   cookieKey: process.env.COOKIE_KEY, 
//   dbPassword: process.env.DB_PASSWORD,
//   AWSAccessKey: process.env.AWSAccessKeyId,
//   AWSSecretKey: process.env.AWSSecretKey
};