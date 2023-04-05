const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./dbConnect"); //example using Sequelize package
//require("./dbConnect_mysql2"); //example using mysql2 package

// parse requests of content-type - application/json
app.use(express.json());

app.use(cors());

app.use("/", express.static("public"));

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes); //sequelize

let photoRoutes = require("./routes/photoRoutes");
app.use("/api/photos", photoRoutes); //sequelize

let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes); //sequelize

// let commentRoutes = require("./routes/commentRoutes");
// app.use("/api/comments", commentRoutes); //sequelize

//let userRoutes2 = require("./routes/userRoutes_mysql2");
//app.use("/api/users2", userRoutes2); //mysql2

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
