import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Selfhelpall from './components/bookscategories/Selfhelpall'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/'  element={<Dashboard/>} />
          <Route path='selfhelpall'  element={<Selfhelpall/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
