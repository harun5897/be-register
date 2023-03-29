const mysql = require("mysql2")

const dbConnect = mysql.createConnection({
  host: "bi7wfypuydpuxgtvsali-mysql.services.clever-cloud.com",
  user: "uu8icofheyalsxmx",
  password: "tIvPwyDrfyGXeeAfqZVB",
  database: "bi7wfypuydpuxgtvsali"
})

dbConnect.connect((err) => {
  if (err) throw err
  console.log("Database Connected...")
})

module.exports = dbConnect