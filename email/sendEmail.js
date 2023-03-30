const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'SendinBlue', // no need to set host or port etc.
    auth: {
        user: 'harungb025@gmail.com',
        pass: 'xStkDpJZbM2Q6g8v'
    }
  }
)

const sendEmail = async ( email ) => {
  const sendTo = String(email)
  const send = await transporter.sendMail({ 
    from: 'example@mail.com',
    to: sendTo,
    subject: "Successful registration",
    text: "I'm, so glad you registered for this app ✔",
  })
}

module.exports = { sendEmail }