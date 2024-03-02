import axios from 'axios'

const API_URL = 'http://localhost:8080'

const register = async (userData) => {
  const res = await axios.post(`${API_URL}/socialmedia`, userData)
  return res.data
}

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/socialmedia/login`, userData)

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(userData.email))
    localStorage.setItem('token', JSON.stringify(res.data.token))
  }
  return {token: res.data.token, email: userData.email}
}

const logout = async () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const res = await axios.delete(`${API_URL}/socialmedia/logout`, { headers: { Authorization: token } })

  if (res.data) {
    localStorage.clear()
  }
  return res.data
}

const authService = {
  register, login, logout
}

export default authService