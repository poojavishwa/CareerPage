import JobOpenings from "./JobOpenings";
import Photos from "./Photos";

const Fun=()=>{
    return(
             <div>
             <div className="md:flex  justify-start">
                <div className="md:w-5/12 p-10 "> 
                <p className=" font-serif text-3xl md:text-5xl">Fun at Workplace</p>
                </div>
                <div className="md:w-7/12 p-10">
                <p className="font-serif text-lg md:text-xl">Quisque quam felis,volutpat sit amet scelerisque eget,
                vestibulam blandit velit. Nulla vestibulam est orci,vitae sodale neque bibendum eget Nulla interdum posuere sem a euismod </p>
                </div>
             </div>
             <Photos/>
            </div>
    )
}
export default Fun;