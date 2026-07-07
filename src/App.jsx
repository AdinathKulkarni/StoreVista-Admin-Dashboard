import './App.css'
import './styles/bodyCss.css'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Products from './pages/Products'
import Analytics from './pages/Analytics'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Sidebar />
        <main className='pt-16 ml-[240px] min-h-screen bg-gray-100'>
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/settings' exact element={ <Settings /> } />
            <Route path='/analytics' exact element={ <Analytics /> } />
            <Route path='/products' exact element={ <Products /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
