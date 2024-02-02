import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='mx-auto text-center text-3xl bg-lime-200  mx-8  my-3'>
        User :{userid}

    </div>
  )
}

export default User

