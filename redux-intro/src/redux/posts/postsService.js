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

const deletePost = async (data) => {
  const { id, token } = data
  const res = await axios.delete(`${API_URL}/delete/${id}`, { headers: {Authorization: token }})
  return res.data
}

const putPost = async (data) => {
  const { id, token, ...restData } = data
  const res = await axios.put(`${API_URL}/update/${id}`, restData, { headers: {Authorization: token }})
  return res.data
}

const postsService = {
  getAll,
  getById,
  newPost,
  deletePost,
  putPost
}

export default postsService