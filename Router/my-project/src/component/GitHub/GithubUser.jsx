import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function GithubUser() {
    const username = useParams()
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const userData = await response.json();
            setData(userData);
          } catch (error) {
            console.error('Error fetching GitHub user:', error);
          }
        };
    
        
        fetchData();
      }, [username]);
    return (
        
          <div className='text-center m-4 bg-slate-300 text-white p-4 '>
       Github Followers {data.followers} 
       <img src={data.avatar_url} alt="" width={300} className='mx-auto pt-7' />
    </div>
        
    )
}

export default GithubUser
