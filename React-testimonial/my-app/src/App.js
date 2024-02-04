import './App.css';
import Testimonial from './component/Testimonial';
import reviews from './data';
import { BiBulb } from "react-icons/bi";

function App() {
  return (
    <div className="flex  flex-wrap flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className='text-center'> 
      <div  className="font-bold text-4xl  mt-2">Our Testimonial</div>
            <div className="bg-violet-600 shadow-md shadow-violet-900  h-[3px] w-[260px] mt-2  mx-auto"></div>
            <Testimonial reviews={reviews}></Testimonial>
            
      </div>
       
    </div>
  );
}

export default App;
