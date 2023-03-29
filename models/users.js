const getEmailExist = () => {
  return 'SELECT COUNT(*) as count FROM tb_users WHERE email = ?'
}
const registerUser = () => {
  return 'INSERT INTO tb_users (name, email, password) VALUES (?, ?, ?)'
}

module.exports = { getEmailExist, registerUser }