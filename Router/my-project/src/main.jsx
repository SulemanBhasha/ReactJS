import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github, { githubInfoLoader } from './component/GitHub/Github.jsx'
import GithubUser from './component/GitHub/GithubUser.jsx'

// const router = createBrowserRouter([
//   {
//     path :"/",
//     element :<Layout/>,
//     children : [
//       {
//         path: "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/> 
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   }
 // ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Layout/>}>
      <Route  path=""  element ={<Home/>} />
      <Route  path="about"  element ={<About/>} />
      <Route  path="contact"  element ={<Contact/>} />
      <Route  path="user/:userid"  element ={<User/>} />
      <Route
      path="github"  element ={<Github/>}
      // loader={githubInfoLoader}
       />
       <Route 
       path='github/:username' element=<GithubUser/>
       />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
