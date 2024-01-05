import React,{useContext} from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
 if(!user)
 return <div className='flex justify-center mb-2'>Please login</div>

 return <div className='flex justify-center mb-2'>Welcome {user.username}</div>
}

export default Profile