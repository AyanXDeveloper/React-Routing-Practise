import React from 'react'

const Calender = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Calendar</h1>
          <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors">
            View Events
          </button>
        </div>
      </div>
    </>
  )
}

export default Calender