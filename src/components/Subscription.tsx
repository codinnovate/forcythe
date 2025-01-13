'use client';

import { useState } from "react"


export default function Subscription(){
    const [show, setShow] = useState(false);

    function handleAgreement(){
        setShow(!show); 
    }
    return (
        <div className="flex flex-col">
            <div className="">
            </div>
            <div className="flex items-center gap-5">
             <div 
             onClick={handleAgreement}
             className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                {show && 
                <div className="bg-white rounded-full w-2 h-2" />
                }
                <input className='hidden' type='checkbox' />
             </div>
             <p>
                I agree to receive other notifications from Forcythe
                </p>

            </div>
            
        </div>
    )
}