import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import './App.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
