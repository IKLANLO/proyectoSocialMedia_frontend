import axios from 'axios'

// const API_URL = 'http://localhost:8080/socialmedia'
const API_URL = 'https://socialmedia-mongodb-dev-eteb.1.us-1.fl0.io/socialmedia'

const register = async (userData) => {
  const res = await axios.post(`${API_URL}`, userData)
  return res.data
}

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData)

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data.user))
    localStorage.setItem('token', JSON.stringify(res.data.token))
    return {token: res.data.token, user: res.data.user}
  }
  return res
}

const logout = async () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const res = await axios.delete(`${API_URL}/logout`, { headers: { Authorization: token } })

  if (res.data) {
    localStorage.clear()
  }
  return res.data
}

const authService = {
  register, login, logout
}

export default authService