import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, LogoutOutlined, LoginOutlined, IdcardOutlined, AuditOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

const items = [
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
    label: 'Logout',
    key: 'logout',
    icon: <LogoutOutlined />,
  },
  {
    label: 'Registro',
    key: 'register',
    icon: <IdcardOutlined />,
  },
  {
    label: 'Perfil',
    key: 'profile',
    icon: <AuditOutlined />,
  }
];

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = (e) => {
    e.preventDefault()
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
        onLogout(e)
        break
      case 'register': 
        navigate('/register')
        break
      case 'perfil': 
        navigate('/profile')
        break
    }
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header