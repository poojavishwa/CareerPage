import Rectangle1 from "../assets/Rectangle 3150.png"
import Rectangle2 from "../assets/Rectangle 3152.png"
import Rectangle3 from "../assets/Rectangle 3153.png"
import Rectangle4 from "../assets/Rectangle 3151-1.png"
import Rectangle5 from "../assets/Rectangle 3150-1.png"
import Rectangle6 from "../assets/Rectangle 3151.png"
import Rectangle7 from "../assets/Rectangle 3154.png"
import Rectangle8 from "../assets/Rectangle 3153-1.png"
import ContactUs from "./ContactUs"
const Photos=()=>{
        return (
            <div className="m-10 space-y-10">
                <div className=" space-y-5">
                <div className="md:flex md:space-x-5">
                    <img className="w-full md:w-[420px] h-[350px]" src={Rectangle1}/>
                    <div className="md:space-y-5">
                    <img className="w-full md:w-72 h-40" src={Rectangle2}/>
                    <img className="w-full md:w-72 h-40" src={Rectangle3}/>
                    </div>
                    <img className="w-full md:w-[420px] h-[350px]" src={Rectangle4}/>
                </div>
                <div className="md:flex md:space-x-5">
                <img className="w-full md:w-[420px] h-[350px]" src={Rectangle5}/>
                <img className="w-full md:w-[467px] h-[350px]" src={Rectangle6}/>
                <div className="md:space-y-5">
                <img className="w-full md:w-60 h-[163px]" src={Rectangle7}/>
                <img className="w-full md:w-60 h-[163px]" src={Rectangle8}/>
                </div>
                </div>
                </div>
                <ContactUs/>
            </div>
        )
}
export default Photos