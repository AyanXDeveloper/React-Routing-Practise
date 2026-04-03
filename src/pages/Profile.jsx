import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const params = useParams()

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-6">{params.userId} Is One of Our Members </h1>
            </div>
        </div>
    )
}

export default Profile