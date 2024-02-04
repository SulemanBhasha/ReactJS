import { useState } from "react";
import {FaQuoteLeft,FaQuoteRight} from  "react-icons/fa";

const Card =(props) =>{
    let reviews=props.reviews;
    
    // function subHandler()
    // {
    // props.reviews.text.subString(0,100);
    // }
             return(
                <div className="flex flex-col md:relative">
                    <div className="absolute top-[-7rem]  z-[10] mx-auto2 ">
                        <img className='object-cover shadow-md shadow-violet-900 aspect-square rounded-full w-[140px] h-[140px] z-[25] ' src={reviews.image}></img>
                    </div>
                    <div className="h-[140px] w-[140px] rounded-full z-[2]  absolute top-[-6rem]   left-[10px] "></div>
                    <div className="text-center mt-1">
                        <p className="font-bold text-2xl  capitalize">{reviews.name}</p>
                    </div>
                
                    <div  className="text-center mt-4" >
                        <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
                    </div>
                    <div  className="text-violet-500 mx-auto mt-5 ">
                        <FaQuoteLeft/>
                    </div>
                    <div className="text-slate-500 text-center mt-4 ">
                        <p>{
                            (props.reviews.text.length<100?props.reviews.text : reviews.text.substring(0,170)+`. . .`)}</p>
                    </div>
                    <div  className="text-violet-500 mx-auto mt-5 ">
                        <FaQuoteRight/>
                    </div>
                    
                 
                </div>
            )
}
export default Card;