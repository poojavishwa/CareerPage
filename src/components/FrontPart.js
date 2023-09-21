import image51 from "../assets/image 51.png"
import React from "react";
import Benefits from "./Benefits";

const FrontPart=()=>{
    return(
        <div >
        <div className="bg-green-100">
              <div className="flex flex-col md:flex-row justify-center items-center relative">
               <img  className="mt-10 md:mt-0 "src={image51} alt="Image Description" />
                <div className="md:absolute m-16 space-y-4 left-0 md:left-20 md:w-1/2">
                <h1 className="text-3xl font-bold font-serif mt-10 md:w-72 text-center md:text-left ">Be a Part of Something Great</h1>
                <p className="w-96 md:w-96 text-center md:text-left">Quisque quam felis,volutpat sit amet scelerisque eget,vestibulam blandit velit. Nulla vestibulam </p>
                <button className="bg-blue-600 p-3 w-44 border rounded-lg text-white mx-auto md:mx-0 block">See Our Openings</button>
                </div>
            </div>
        </div>
        <Benefits/>
        </div>
    )
}
export default FrontPart;




