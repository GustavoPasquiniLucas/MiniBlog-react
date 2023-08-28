import Home from './pages/home'
import About from './pages/about'
import NavBar from './components/navbar.jsx'
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

function App() {
  return (
<div className="app">
  <BrowserRouter>
  <NavBar />
  <div className='container'>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/About' element={ <About/>} />
    </Routes>
  </div>
  <footer />
  </BrowserRouter>
</div>


  )
}
export default App
