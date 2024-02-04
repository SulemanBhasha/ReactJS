// import React from "react";
// import { useContext } from "react";
// import UserContext from "../Context/UserContext";

// function Profile(){
//  const {user} = useContext(UserContext)

//     if (!user) return <div>Please login</div>
//     return <div>Welcome {user.username}</div>

    
 
// }

import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user || user.username==='') return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile