"use strict";
const { Sequelize } = require("sequelize");

//Sequelize is a package that abstracts out the need to write SQL queries,
//relying instead on their models to do it for you

const sequelize = new Sequelize(
  process.env.DB_EMAIL,
  process.env.DB_USERNAME,
  process.env.DB_TEL,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Successful connection to MySQL Database ${process.env.DB_USERNAME}`
    );
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    process.exit(1);
  }
};

connectMysql();

module.exports = {
  Sequelize: sequelize,
  connectMysql,
};
