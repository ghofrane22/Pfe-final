const mongoose = require("mongoose");
require("dotenv").config();
//permet de charger des variables d'environnement à partir d'un fichier .env
const mongoURI = process.env.MONGO_URI;

const connect = () => {
  return mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log(`Connection Established!😁`))
    .catch((error) => console.log(`Connection Error ${error}`));
};

module.exports = connect;
