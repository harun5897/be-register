const axios = require('axios')

// Variabel Token and URL
const codeTokenRefresh = '1//04znzLTTsEtHBCgYIARAAGAQSNwF-L9IrVfQ2QIc5apqCJxnXpCgy9p1SeaJ0dM0YqLv7Tt1wxK7d2Hoqki3xUsuBx1W-tQHCBHY'
const url = 'https://developers.google.com/oauthplayground/refreshAccessToken'
const uri = 'https://oauth2.googleapis.com/token'

const refreshAccessToken = async () => {
  const response =  await axios.post(url, {
    refresh_token: codeTokenRefresh,
    token_uri: uri,
  })
  .then(response => response.data.access_token)
  .catch(err => err.error)
  return response
}

module.exports = { refreshAccessToken }