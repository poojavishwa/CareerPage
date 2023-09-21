import image51 from "../assets/image 51.png"
import Vector2 from "../assets/Vector2.png"
import Vector3 from "../assets/Vector3.png"
import Vector4 from "../assets/Vector-4.png"
import Vector5 from "../assets/Vector-5.png"
import Vector6 from "../assets/Vector-6.png"
import Vector7 from "../assets/Vector-7.png"

const CareerPage=()=>{
    return(
        <div>
            <div className="flex justify-between relative">
               <img  className="mt-10"src={image51} alt="Image Description" />
                <div className="absolute m-16 space-y-5 left-20">
                <h1 className="text-3xl font-bold font-serif w-72  mt-20 ">Be a Part of Something Great</h1>
                <p className="w-96">Quisque quam felis,volutpat sit amet scelerisque eget,vestibulam blandit velit. Nulla vestibulam </p>
                <button className="bg-blue-600 p-3 w-44 border rounded-lg text-white">See Our Openings</button>
                </div>
            </div>
            <div className=" flex-col ml-[5%] mr-[5%]">
            <div className="flex justify-center">
            <div className="m-10 ">
            <div className="flex">
            <div className=" flex flex-col items-center justify-center w-64 h-72 border border-yellow-300 rounded-3xl ">
                <img className="mt-10 w-8 h-8" src={Vector2} />
                <h2 className="font-bold">Large Beautiful Office</h2>
                <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
            </div>
            <div className="w-64 h-72 m-10 border border-yellow-300 rounded-3xl ">  
                <img className=" m-7 w-8 h-8" src={Vector3} />
                <h2 className="font-bold">Great Co-Workers</h2>
                <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
            </div>
        </div>
            <div className="flex">
            <div className=" w-64 h-72 border border-yellow-300 rounded-3xl ">
                <img className=" m-7 w-8 h-8" src={Vector4} />
                <h2 className="font-bold">Easy Location</h2>
                <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
            </div>
            <div className="w-64 h-72 m-10  border border-yellow-300 rounded-3xl "> 
            <img className=" m-7 w-8 h-8" src={Vector5} />
                <h2 className="font-bold">Educational Opportunity</h2>
                <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
            </div>
            </div>
            <div className="flex">
            <div className=" w-64 h-72 border border-yellow-300 rounded-3xl ">
                <img className=" m-7 w-8 h-8" src={Vector6} />
                <h2 className="font-bold">Performance Award</h2>
                <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>
            </div>
            <div className="w-64 h-72 m-10 border border-yellow-300 rounded-3xl ">
            <img className=" m-7 w-8 h-8" src={Vector7} />
                <h2 className="font-bold">Easy access to leadership</h2>
                <p>Proin volutpat commodo erat sit amet sodales.Ut elementum ultricies efficitur</p>    
            </div>
            </div>
            </div>
            <div className="m-[5%] mt-[10%]">
                <h1 className="text-3xl font-bold w-72 font-serif m-5">Perks & Benefits</h1>
                <p className="font-serif w-80 m-5">Quisque quam felis,volutpat sit amet scelerisque eget,
                vestibulam blandit velit. Nulla vestibulam est orci,vitae sodale neque bibendum eget Nulla interdum posuere sem a euismod </p>
                 <button className="bg-orange-400 rounded-lg m-5 p-3 w-36 text-white">Learn More</button>
             </div>
            </div>
        
            <div className="flex justify-start">
                <div className="w-5/12 p-10 "> 
                <p className=" font-serif text-[34px]">We're looking for talented people</p>
                </div>
                <div className="w-7/12 p-10">
                <p className="font-serif text-[20px]">Quisque quam felis,volutpat sit amet scelerisque eget,
                vestibulam blandit velit. Nulla vestibulam est orci,vitae sodale neque bibendum eget Nulla interdum posuere sem a euismod </p>
                </div>
             </div>
                <div className=" w-[1000px] h-40 ml-[4%] border border-black">
                        <h3 className="mt-3 ml-12 font-bold">Current Openings</h3>
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative flex justify-center mt-5">
                        <div class="absolute inset-y-0 left-12 flex items-center pl-3 pointer-events-none ">
                            <svg class="w-4 h-4 text-gray-700 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-[900px] p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Jobs" />
                    </div>
                </form>
                </div> 
        </div>       
        </div>
    )

}
export default CareerPage;