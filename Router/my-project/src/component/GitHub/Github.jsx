import React, { useEffect, useState } from 'react'

function Github() {
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
