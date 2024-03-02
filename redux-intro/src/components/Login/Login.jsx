import React, { useState } from 'react'
import { login } from '../../redux/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email,password} = formData

  const onChange = (e)=>{
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('formData',formData)
    dispatch(login(formData))
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} placeholder='Email' onChange={onChange}/>
      <input type="password" name="password" value={password} placeholder='Contraseña' onChange={onChange}/>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login