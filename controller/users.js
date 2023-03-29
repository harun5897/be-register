const dbConnect = require('../config/dbConfig')
const userModels = require('../models/users')
const validator = require('../validator/validator')
const mail = require('../email/sendEmail')

const postRegisterUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({ 
      message: 'Invalid payload',
      error: 'Name, email, and password are required'
    })
  } else {
    dbConnect.query(userModels.getEmailExist(), email, (err, result) => {
      if (err) throw err
      const count = result[0].count
      if (count > 0) {
        res.status(400).json({
          message: 'Invalid payload',
          error: 'Email already registered',
        })
      } else {
        if(password !== confirmPassword) {
          res.status(400).json({
            message: 'Invalid payload',
            error: 'Password does not match',
          })
        } else {
          if (validator.validatePassword(password)) {
            dbConnect.query(userModels.registerUser(), [name, email, password], async (err, result, fields) => {
              if(err) throw err
              // kirim email notifikasi
              mail.sendEmail(email)
              res.status(201).json({
                message: 'success',
              })
            })
          } else {
            res.status(400).json({
              message: 'Invalid payload',
              error: 'Password must have at least one lowercase, one uppercase, one digit, one special character, and a minimum length of 8 characters.'
            })
          }
        }
      }
    })
  }
}

module.exports =  { postRegisterUser } 
