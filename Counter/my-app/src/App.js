
import './App.css';
import {useState} from 'react'

function App() {
     const [count , setCount]=useState(0)
  return (
    <>
     <div className='fist'>
      <div onClick={()=>setCount((count)=>count-1)}>
          <h1 className='helo'>- </h1>
      </div>
      <div>
        <h1>{count}</h1>
      </div>
      <div onClick={()=>setCount((count)=>count+1)}>
        <h1> +</h1>
      </div>
     </div>
    </>
  )
}

export default App;
