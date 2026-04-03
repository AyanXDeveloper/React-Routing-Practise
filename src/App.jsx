import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Dashboard from "./pages/Dashboard"
import Team from "./pages/Team"
import Projects from "./pages/Projects"
import Calender from "./pages/Calender"
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import EcommerceWebsite from './pages/EcommerceWebsite'
import TodoApp from './pages/TodoApp'

function App() {

  return (
    <>
      <div className='w-full h-screen bg-[#101828] flex flex-col justify-between'>
        <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} >
              <Route path='ecommerce-website' element={<EcommerceWebsite />}/>
              <Route path='todo-app' element={<TodoApp />}/>
            </Route>
            <Route path="/calender" element={<Calender />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
