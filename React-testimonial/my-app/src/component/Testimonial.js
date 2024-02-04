import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { useState } from "react";
import { BiBulb } from "react-icons/bi";

const Testimonial=(props)=>{
    let reviews= props.reviews;
    const [index,setIndex]=useState(0);
    function    leftShiftHandler(){
        if(index-1<0)
        {
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1); 
        }

    }
    function    rightShiftHandler(){
        if(index+1>=reviews.length)
        {
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }
    function    surpriseHandler(){
        let randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex)
    }

    return(
        <div className="rounded-lg shadow-md shadow-violet-900 w-[85vw] md:w-[700px] bg-white flex-col justify-center items-center
        mt-10 p-10 ">
            <Card reviews={reviews[index]} ></Card>
            <div className="flex mx-auto text-violet-500 font-bold mt-5  text-3xl  gap-3  justify-center">
                        <button
                            onClick={leftShiftHandler}
                        className="cursor-pointer hover:text-violet-900  " >
                        <FiChevronLeft/>
                        </button>
                        <button 
                            onClick={rightShiftHandler}
                        className="cursor-pointer hover:text-violet-900  ">
                            <FiChevronRight/>
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={surpriseHandler}
                        className="bg-violet-400 shadow-md shadow-violet-700 hover:bg-violet-600 transition-all duration-200 text-1xl font-bold rounded-md 
                    px-10 py-1 mt-5 text-white  
                    ">
                            Surprise Me
                        </button>
                       
                    </div>
                    <div className=" flex justify-center items-center m-auto mt-3 text-2xl
                    p-1 rounded-full h-[50px] w-[50px] fill-yellow-300
                     hover:text-yellow-300 cursor-pointer         
                    ">
                            <BiBulb/>
                        </div>
                    </div>
            
        
    )
}
export default Testimonial;