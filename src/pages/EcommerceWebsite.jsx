import React from 'react'
import { useNavigate } from 'react-router-dom'

const EcommerceWebsite = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Ecommerce Website</h1>
        <div className='flex items-center justify-center gap-7'>
          <button onClick={() => {
            navigate("/projects")
          }} className="cursor-pointer px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
            View Projects Page
          </button>
          <button onClick={() => {
            navigate(-1)
          }} className="cursor-pointer px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
            Head Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default EcommerceWebsite