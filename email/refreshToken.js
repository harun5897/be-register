const axios = require('axios')

// Variabel Token and URL
const codeTokenRefresh = '1//04pYJdyPV5DqhCgYIARAAGAQSNwF-L9IrwaKWVwLrbqKSd1G7_EYIfdt90FCbY3XVgk7GCrAby0OjdYj32B_lqVfLmBF4fstoYBc'
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