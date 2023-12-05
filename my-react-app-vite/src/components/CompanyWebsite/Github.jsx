import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData] = useState([])
    // const [user,setUser] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // })
    // useEffect(() => {
    //     fetch('https://api.github.com/users/subhamkumar101201')
    //     .then(response => response.json())
    //     .then(data => {
    //         setUser(data)
    //     })
    // })

    const data = useLoaderData()
    console.log(data)
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers :{data.followers}
        <h4>Name:{data.name}</h4>
    <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/subhamkumar101201')
    return response.json()
}