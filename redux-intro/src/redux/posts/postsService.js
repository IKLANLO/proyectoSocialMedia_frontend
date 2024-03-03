import axios from 'axios';

const API_URL = 'http://localhost:8080/posts'

const getAll = async () => {
  const res = await axios.get(`${API_URL}`)
  return res.data
}

const getById = async (id) => {
  const res = await axios.get(`${API_URL}/id/${id}`)
  return res.data
}

const newPost = async (data) => {
  const { title, text, token } = data
  const res = await axios.post(`${API_URL}`, { name: title, post: text }, { headers: {Authorization: token }})
  return res.data.post
}

const postsService = {
  getAll,
  getById,
  newPost
}

export default postsService