import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
//import { useState } from "react"

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

  // const [circle, setCircle] = useState(0)
  // const random = gsap.utils.random(-500,500,100)

  // useGSAP(()=>{
  //   gsap.to(".circle",{
  //     x: circle,
  //     duration: 0.5
  //   })
  // },[circle])

  // const randomX = gsap.utils.random(-500, 500, 100)
  // const rotateX = gsap.utils.random(-360, 360, 30)
  // const randomY = gsap.utils.random(-500, 500, 30)

  // const [xValue, setXValue] = useState(0)
  // const [yValue, setYValue] = useState(0)
  // const [roti, setRoti] = useState(0)

  // const boxRef = useRef()

  // const imageRef = useRef()

  // useGSAP(()=>{
  //     gsap.to(imageRef.current,{
  //         x:xValue,
  //         y:yValue,
  //         duration:0.6,
  //         rotate:roti
  //     })
  // },[xValue,yValue,rotateX])

  const boxRef = useRef();

  const {contextSafe } = useGSAP();

    const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
    rotate: 360,
    duration: 1,
    });
  });

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

      {/* <button onClick={() =>{
        setCircle(random)
      }}>Animate</button>
      <div className="circle"></div> */}

      {/* <button onClick={() =>{
        setXValue(randomX)
        setRoti(rotateX)
        setYValue(randomY)
      }}>Animate</button> */}
      {/* <div ref={boxRef} className="box"></div> */}
      {/* <img
        onClick={() =>{
        setXValue(randomX)
        setRoti(rotateX)
        setYValue(randomY)
      }} ref={imageRef} src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt=""/> */}

      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">
        Box
      </div>
    </main>
  );
};

export default App;
