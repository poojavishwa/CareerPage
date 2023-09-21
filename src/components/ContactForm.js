import React, { useState } from 'react'
const ContactForm=()=>{
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    }; 
    return(
        <div>
              <div className='mr-5'>
                <form className=' mt-5  space-y-5 md:mr-10'>
                    <h1 className='font-bold text-3xl md:text-4xl font-serif'>Let's Get In Touch</h1>
                    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20'>
                    <div className='flex flex-col  space-y-5'>
                        <label>First Name</label>
                        <input type="text" className='border-b border-black  w-full md:w-52 ' />
                        <label>Last Name</label>
                        <input type="text" className='border-b border-black w-full md:w-52 ' />
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <label>Email</label>
                        <input type="text" className='border-b border-black w-full md:w-52' />
                        <label>Phone Number</label>
                        <input type="text" className='border-b border-black w-full md:w-52' />
                    </div>
                </div>
                <div className='space-y-5'>
                    <label className='font-bold'>Select Subject </label>
                <div className='space-x-10 md:space-x-10'>
                <label>
                    <input type="radio" value="option1" 
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                    />
                    General Inquiry
                </label>
                <label>
                    <input type="radio" value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                    />
                     Complain
                </label>
                <label>
                    <input type="radio" value="option3"
                    checked={selectedOption === 'option3'}
                    onChange={handleOptionChange} 
                    />
                    Specific
                </label>
                <label>
                    <input type="radio" value="option4" 
                    checked={selectedOption === 'option4'}
                    onChange={handleOptionChange}
                    />
                     other
                </label>
                </div>
                <div>
                <label className='font-bold'>Message</label>
                <input type="text" className='border-b border-black w-full' placeholder='write your message...' />
                </div>
              <div className=' flex items-end justify-end m-5'><button className='bg-red-500 border rounded-md p-3 w-36   md:w-44 font-bold'>Send Message</button></div> 
                </div>
                
              
                </form>

            </div>
        </div>
    )
}
export default ContactForm