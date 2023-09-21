import ApplyCard from "./ApplyCard"
import Fun from "./Fun"

const JobOpenings=()=>{
    return(
        <div className="space-y-10 ml-[5%] ">
            <div className="md:w-[1150px] h-40 border bg-white ">
                    <h3 className="mt-3 ml-12 font-bold">Current Openings</h3>
                <form>   
                    <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative flex justify-center mt-5">
                        <div class="absolute inset-y-0 left-32 flex items-center pl-3 pointer-events-none ">
                            <svg class="w-4 h-4 text-gray-700 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-[900px]  p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Jobs" />
                    </div>
                </form>
            </div> 
            <div className="md:flex md:flex-wrap md:space-x-32">
                <ApplyCard/>
                <ApplyCard/>
                <ApplyCard/>
                <ApplyCard/>
            </div>
            <div className="flex items-center justify-center md:justify-start ml-[37%]">
                <button className="bg-blue-600 border rounded-3xl p-2 w-44 text-white">View all openings</button>
            </div>
            <Fun/>
        </div>
    )
}
export default JobOpenings