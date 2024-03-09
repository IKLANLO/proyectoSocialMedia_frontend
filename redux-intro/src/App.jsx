import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import PrivateZone from './guards/PrivateZone'
import Profile from './components/Profile/Profile'
import PostDetail from './components/Posts/PostDetail/PostDetail'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
