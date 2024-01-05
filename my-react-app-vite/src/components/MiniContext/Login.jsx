import React,{useState,useContext} from 'react'
import UserContext from '../../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div className='bg-white rounded-md shadow-md p-6 max-w-md mx-auto'>
    <h1 className='text-center mb-4 text-xl font-bold'>Login</h1>
    <div className='flex flex-col gap-y-4'>
        <input  
            className='border border-gray-500 py-2 px-4 rounded-md w-full text-center' 
            type="text" 
            placeholder='Enter name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input  
            className='border border-gray-500 py-2 px-4 rounded-md w-full text-center' 
            type="password" 
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-blue-500 text-white py-2 rounded-md w-full hover:bg-blue-600 transition duration-300' onClick={handleSubmit}>
            Submit
        </button>
    </div>
</div>

  )
}

export default Login