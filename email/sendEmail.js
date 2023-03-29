const nodemailer = require('nodemailer')
const Transport = require("nodemailer-sendinblue-transport")

const api_key = "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"
const transporter = nodemailer.createTransport(
  new Transport({ apiKey: api_key })
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