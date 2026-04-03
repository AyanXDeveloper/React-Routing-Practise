import React from 'react'
import { Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6"><Outlet /></h1>
        </div>
      </div>
    </>
  )
}

export default Projects