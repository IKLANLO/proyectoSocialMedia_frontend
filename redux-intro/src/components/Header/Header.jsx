import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  LogoutOutlined,
  LoginOutlined,
  IdcardOutlined,
  AuditOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth/authSlice'
import Search from '../Search/Search'

const Header = () => {
  const { user } = useSelector((state) => state.auth)
  const [current, setCurrent] = useState('home')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let items = []

  const handleMenu = () => {
    if (user) {
      items = [
        {
          label: 'Home',
          key: 'home',
          icon: <HomeOutlined />,
        },
        {
          label: 'Logout',
          key: 'logout',
          icon: <LogoutOutlined />,
        },
        {
          label: 'Perfil',
          key: 'profile',
          icon: <AuditOutlined />,
        },
        {
          key: 'search',
          icon: <Search />,
        },
      ]
    } else {
      items = [
        {
          label: 'Home',
          key: 'home',
          icon: <HomeOutlined />,
        },
        {
          label: 'Login',
          key: 'login',
          icon: <LoginOutlined />,
        },
        {
          label: 'Registro',
          key: 'register',
          icon: <IdcardOutlined />,
        },
        {
          key: 'search',
          icon: <Search />,
        },
      ]
    }
  }

  handleMenu()

  useEffect(() => {
    handleMenu()
  }, [user])

  const onLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
    switch (e.key) {
      case 'home':
        navigate('/')
        break
      case 'login':
        navigate('/login')
        break
      case 'logout':
        onLogout()
        break
      case 'register':
        navigate('/register')
        break
      case 'profile':
        navigate('/profile')
        break
    }
  }

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    </>
  )
}

export default Header
