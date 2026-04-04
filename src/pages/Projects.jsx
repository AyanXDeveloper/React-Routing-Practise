import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const Projects = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  
  const isNestedRoute = location.pathname !== '/projects'

  return (
    <>
      {!isNestedRoute && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-16">Our Projects</h1>
            <div className='flex items-center justify-center gap-7'>
              <button onClick={() => {
                navigate("/projects/ecommerce-website")
              }} className="cursor-pointer px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                Ecommerce Website
              </button>
              <button onClick={() => {
                navigate("/projects/todo-app")
              }} className="cursor-pointer px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                Todo Application
              </button>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  )
}

export default Projects