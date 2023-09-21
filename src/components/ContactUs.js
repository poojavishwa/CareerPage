import Group1 from "../assets/Group.png"
import Group2 from "../assets/Group-1.png"
import ContactForm from "./ContactForm"

const ContactUs = () => {

    return (
        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 bg-white border rounded-2xl'>
            <div className='p-4 w-full md:w-1/2'>
                <div className='flex flex-col md:flex-row w-auto space-y-6 md:space-y-0 md:space-x-10 '>
                    <div className="border rounded-3xl w-full md:w-72 bg-pink-200 h-72 space-y-6">
                        <img className='w-10 h-10 m-6' src={Group1} />
                        <h1 className='font-serif text-2xl font-bold ml-6'>Contact Us</h1>
                        <p className='ml-6 w-48'>We are on a mission to standarize lab education</p>
                        <button className='bg-purple-500 rounded-3xl w-24 h-10 text-white ml-6'>Join Us</button>
                    </div>
                    <div className="border rounded-3xl md:w-72 bg-green-300 h-72 space-y-6">
                        <img className='w-10 h-10 m-6' src={Group2} />
                        <h1 className='font-serif text-2xl font-bold ml-6 mt-4'>Call Us!</h1>
                        <p className='ml-6 mt-4 w-48'>We are on a mission to standarize lab education</p>
                        <button className='bg-green-900 rounded-3xl w-24 h-10 text-white ml-6 mt-4'>Join Us</button>
                    </div>
                </div>
                <div className='bg-yellow-200 w-full h-52 mt-4 rounded-3xl'>
                    <div className='flex p-4 items-center'>
                        <img className='w-10 h-10'  src="https://img.icons8.com/color/48/whatsapp--v1.png" />
                        <p className='font-serif text-2xl font-bold ml-6'>Don't like forms?</p>
                    </div>
                    <p className='ml-6'>We are on a mission to standarize lab education We are on a mission to standarize lab education</p>
                    <button className='bg-black rounded-3xl w-20 h-10 text-white ml-6 mt-4'>Chat</button>
                    <button className='bg-orange-500 rounded-3xl w-36 h-10 text-white ml-6 mt-4'>I Prefer Email</button>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <ContactForm/>
            </div>
          
        </div>
    )
}

export default ContactUs