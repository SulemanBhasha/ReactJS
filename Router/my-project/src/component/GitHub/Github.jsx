import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Github() {
  // const data=useLoaderData()
  // console.log(data.followers);
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/SulemanBhasha")
        .then((response)=>response.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div className='text-center m-4 bg-slate-300 text-white p-4 '>
       Github Followers {data.followers}
       <img src={data.avatar_url} alt="" width={300} className='mx-auto pt-7' />
    </div>
   
  )
}

export default Github

export const githubInfoLoader= async ()=>{
  const response =   await fetch("https://api.github.com/users/SulemanBhasha")
  return await response.json()
}
