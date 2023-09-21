import Vector2 from "../assets/Vector2.png"
import Vector3 from "../assets/Vector3.png"
import Vector4 from "../assets/Vector-4.png"
import Vector5 from "../assets/Vector-5.png"
import Vector6 from "../assets/Vector-6.png"
import Vector7 from "../assets/Vector-7.png"
import Cards from "./Cards"
import Talent from "./Talent"
const Benefits=()=>{
    return(
       <div className="bg-gray-100">
        <div className="md:flex md:m-10 ">
        <div className="md:w-1/2 space-y-10">
        <Cards>
            <img className="w-8 h-8" src={Vector2} />
            <h2 className="font-bold">Large Beautiful Office</h2>
            <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
        </Cards>
        <Cards>
           <img className=" w-8 h-8" src={Vector4} />
           <h2 className="font-bold">Easy Location</h2>
           <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
       </Cards>
       <Cards>
            <img className="w-8 h-8" src={Vector6} />
            <h2 className="font-bold">Performance Award</h2>
            <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
        </Cards>
        </div>
        <div className="md:w-1/2 space-y-10 mt-20">
        <Cards>  
            <img className="w-8 h-8" src={Vector3} />
            <h2 className="font-bold">Great Co-Workers</h2>
            <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
        </Cards>
        <Cards> 
            <img className=" w-8 h-8" src={Vector5} />
            <h2 className="font-bold">Educational Opportunity</h2>
            <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
        </Cards>
        <Cards>
            <img className=" w-8 h-8" src={Vector7} />
            <h2 className="font-bold">Easy access to leadership</h2>
            <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>    
        </Cards>
        </div>
        <div className="md:m-[5%] md:mt-[10%]  space-y-5">
            <h1 className="text-3xl font-bold w-72 font-serif ">Perks & Benefits</h1>
            <p className="font-serif w-80">Quisque quam felis,volutpat sit amet scelerisque eget,
                vestibulam blandit velit. Nulla vestibulam est orci,vitae sodale neque bibendum eget Nulla interdum posuere sem a euismod </p>
            <button className="bg-orange-400 rounded-lg p-3 w-36 text-white">Learn More</button>
        </div>
        </div>
        <Talent/>
       </div>
    )
}
export default Benefits