import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


///Practising GSAP new technology
function Blogs() {
     
    useEffect(()=>{     
      gsap.registerPlugin(ScrollTrigger); 
      gsap.to(".square",{
        //method 1
          x:400,
          duration:3,
          // scrollTrigger:".square"
        //Submethod use 2
          scrollTrigger:{
            trigger:".square",
            start:"top center",
            markers:true

         }
    }) 
    })
 
  return (
    <>
        <div className='h-screen  bg-slate-400'>

        </div>
        <div className='h-screen  bg-purple-400'>
                <div className='container mx-auto max-w-7xl lg:px-8'>
                    <div className='square w-[200px] h-[200px] rounded-xl bg-white '></div>
                </div>
        </div>
    </>
  )
}

export default Blogs

