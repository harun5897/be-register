const nodemailer = require('nodemailer')
const getToken = require('../email/refreshToken')

// Varibael Token
const client_secret = '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'
const client_id = '639193160059-891t6ahsc723bd7jqt2ks5m1k6nu90li.apps.googleusercontent.com'
let token = ""

const sendEmail = async ( email ) => {
  const sendTo = String(email)
  const getNewToken = await getToken.refreshAccessToken()
  token = String(getNewToken)
  if(token) {
    console.log(token)
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "harunstudio97@gmail.com",
        clientId: client_id,
        clientSecret: client_secret,
        accessToken: token,
      },
    })
    const send = await transport.sendMail({ 
      from: 'harunstudio97@gmail.com',
      to: sendTo,
      subject: "Successful registration",
      text: "I'm, so glad you registered for this app ✔",
    })
  }
}

module.exports = { sendEmail }