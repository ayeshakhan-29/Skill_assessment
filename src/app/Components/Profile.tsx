import React from 'react'
import Image from 'next/image'
import profile from "../../../public/Images/profile.jpg"

const Profile = () => {
    return (
        <div>
            <Image
                src={profile}
                alt="User Profile"
                className='rounded-full h-28 w-28 border-4 border-gray-200'
            />
        </div>
    )
}

export default Profile
