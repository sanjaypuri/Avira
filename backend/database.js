const mysql = require('mysql2')

 const conn = mysql.createConnection({
    // host:'sql12.freemysqlhosting.net',
    // user:'sql12648626',
    // password:'FDYJ1Gdurl',
    // database:'sql12648626'
    host:'localhost',
    user:'root',
    password:'',
    database:'passwordmanager'
  })

conn.connect((err)=>{
  if(err){
    console.log("Error connecting to Database");
  } else {
    console.log("Connection to Database established");
  }
});

module.exports = conn;