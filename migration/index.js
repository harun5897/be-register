const dbConnect = require("../config/dbConfig")

function createTable() {
  dbConnect.query(
    `CREATE TABLE IF NOT EXISTS tb_users (
      id_user INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255)
    )`,
    (err, result) => {
      if (err) throw err;
      console.log('Create table success ....')
      dbConnect.end()
    }
  )
}

createTable()