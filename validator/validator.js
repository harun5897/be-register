const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#~])[A-Za-z\d@$!%*?&#~]{8,}$/
  return regex.test(password)
}

module.exports = { validatePassword }