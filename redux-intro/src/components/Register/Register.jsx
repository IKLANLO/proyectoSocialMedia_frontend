import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'

const Register = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'',
  })

  const {first_name, last_name, email, password} = formData

  const onChange = (e)=>{
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formData))
    console.log('formData',formData)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="first_name" value={first_name} placeholder='Nombre' onChange={onChange}/>
      <input type="text" name="last_name" value={last_name} placeholder='Apellido' onChange={onChange} />
      <input type="email" name="email" value={email} placeholder='Email' onChange={onChange}/>
      <input type="password" name="password" value={password} placeholder='Contraseña' onChange={onChange}/>
      <button type="submit">Registro</button>
    </form>

  )

}

export default Register