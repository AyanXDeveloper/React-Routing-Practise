import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()
  
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold text-white mb-6">Welcome to Dashboard</h1>
          <button onClick={() => navigate("/projects")} className="cursor-pointer px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
            View Projects
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard