import React, { useState } from 'react'
import { login } from '../../redux/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
// import { Input, Button } from 'antd'
import './Login.style.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const navigate = useNavigate()
  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    await dispatch(login(formData))
    navigate('/profile')
  }

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <input
          className="container__input"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <span className="container__input container__password">
          <input
            className="container__password__input"
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            value={password}
            placeholder="Contraseña"
            onChange={onChange}
          />
          {passwordVisible ? (
            <EyeTwoTone onClick={() => setPasswordVisible(false)} />
          ) : (
            <EyeInvisibleOutlined onClick={() => setPasswordVisible(true)} />
          )}
        </span>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
