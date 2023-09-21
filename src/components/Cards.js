const Cards=({children})=>{
    return(
        <div>
            <div className=" bg-white flex flex-col space-y-3 p-7 w-64 h-56 border border-pink-300 rounded-3xl">
               {children}
            </div>
        </div>
    )
}
export default Cards