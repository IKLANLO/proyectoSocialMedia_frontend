import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, LogoutOutlined, LoginOutlined, IdcardOutlined, AuditOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice'

const token = localStorage.getItem('token')


const Header = () => {

  const { user } = useSelector((state) => state.auth)
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />,
    },
    !user ? {
      label: 'Login',
      key: 'login',
      icon: <LoginOutlined />,
    } : {},
    user ? {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
    } : {},
    !user ? {
      label: 'Registro',
      key: 'register',
      icon: <IdcardOutlined />,
    } : {},
    user ? {
      label: 'Perfil',
      key: 'profile',
      icon: <AuditOutlined />,
    } : {}
  ];


  const onLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    switch (e.key){ 
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
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header