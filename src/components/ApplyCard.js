import React, { useEffect, useRef, useState } from 'react';
import icon from "../assets/icon.jpeg"
const ApplyCard=()=>{
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [ulHeight, setUlHeight] = useState('0');
  const ulRef = useRef(null);

  const toggleUlVisibility = () => {
      setIsUlVisible(!isUlVisible);
  };
  useEffect(() => {
    if (ulRef.current) {
        const ulContent = ulRef.current.querySelector('ul');
        if (isUlVisible) {
            const contentHeight = ulContent ? ulContent.clientHeight + 'px' : '0';
            const minHeight = '100px';
            setUlHeight(contentHeight > minHeight ? contentHeight : minHeight);
        } else {
            setUlHeight('0');
        }
    }
}, [isUlVisible]);

    return(
        <div>
            <div className="w-48 p-2 border bg-white  rounded-md ">
                <h3 className="font-bold">UI Developer</h3>
                <p className='text-blue-600'>Labkafe <span className='text-gray-400'>| Full Time</span></p>
                <div className="flex justify-between">
                  <div className='space-y-3'>
                    <div className='flex'>
                    <p>Responsibility</p>
                    <img className='w-5 h-5 cursor-pointer'onClick={toggleUlVisibility} src={icon}/>
                    </div>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                   </ul>
                 
                   <div
                   ref={ulRef}
                   className={`overflow-hidden transition-max-h max-h-0 ${
                       isUlVisible ? 'max-h-full' : ''
                   }`}
                   style={{ maxHeight: ulHeight }}
               >
                  <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                 </ul>
             </div>
             <div className='flex items-center justify-center'>
             <button className='flex items-center justify-center bg-orange-300 border rounded-3xl p-3 w-32'>Apply</button>
             </div>
             </div> 
               </div>
       
                </div>
                
            </div>
    
    )
}
export default ApplyCard