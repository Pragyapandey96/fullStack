import React from 'react';
import{useGSAP} from '@gsap/react'
import gsap from  'gsap'
import { useRef } from 'react';
import { useState } from 'react';

const App = () => {

  // useGSAP(() =>{
  //   gsap.to(".box",{
  //     x: 1000,
  //     duration:2,
  //     delay:1
  //   })
  //})

  // const gsapRef = useRef()

  // useGSAP(()=>{
  //   gsap.to(gsapRef.current,{
  //     x:1500,
  //     duration:2,
  //     delay:1,
  //     rotate:720
  //   })
  // })

  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     y:300,
  //     opacity:0,
  //     rotate:720,
  //     duration:1,
  //     delay:1
  //   })
  // })

  // const boxRef = useRef()

  // useGSAP(() => {
  //   gsap.from(boxRef.current,{
  //     y:300,
  //     opacity:0,
  //     rotate:720,
  //     duration:1,
  //     delay:1
  //   })
  // })

  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     rotate:720,
  //     scale:0,
  //     duration:1,
  //     opacity:0
  //   })
  // }, {scope:".container"})

  const [circle, setCircle] = useState(0)
  const random = gsap.utils.random(-500,500,100)
  
  



  return (
    <main>
      {/* <div className="container">
        <div className="circle"></div>
        <div  className="box"></div>
        </div>

        <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      <button onClick={()=>{
          setCircle(random)
          console.log(circle);
      }}>Animate</button>
      <div className="circle"></div>
    </main>
  );
}

export default App;
