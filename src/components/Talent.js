import JobOpenings from "./JobOpenings";

const Talent=()=>{
    return(
             <div className="bg-gray-100 flex-col">
             <div className="md:flex justify-start">
                <div className="md:w-5/12 p-10 "> 
                <p className=" font-serif text-[34px] md:text-5xl">We're looking for talented people</p>
                </div>
                <div className="md:w-7/12 p-10">
                <p className="font-serif text-lg md:text-xl">Quisque quam felis,volutpat sit amet scelerisque eget,
                vestibulam blandit velit. Nulla vestibulam est orci,vitae sodale neque bibendum eget Nulla interdum posuere sem a euismod </p>
                </div>
             </div>
             <JobOpenings/>
            </div>
    )
}
export default Talent;