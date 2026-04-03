import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold text-white mb-6">Welcome to Dashboard</h1>
          <button className="cursor-pointer px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard