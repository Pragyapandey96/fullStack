// gsap.to("#box", {
//     x: 1000,
//     duration: 1,
//     delay: 1,
//     rotate:360,
//     repeat:-1,
//    yoyo: true,
// })

// gsap.to("#box1", {
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,
// })

// gsap.to("#box2", {
//     x: 1200,
//     duration: 1.5,
//     backgroundColor: "yellow",
//     delay: 2.5,
// })

// gsap.to("#box3", {
//     x: 1200,
//     duration: 1.5,
//     backgroundColor: "blue",
//     delay: 4,
//     borderRadius: "50%",
//     scale: 0.5
// })




// TIMELINE


// let tl = gsap.timeline()

// tl.to("#box1", {
//     x: 1300,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1,
// })
// tl.to("#box2", {
//     x:1300,
//     duration: 1.5
// })
// tl.to("#box3", {
//     x: 1300,
//     duration: 1.5,
// })

let tl = gsap.timeline()

tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 1,
})

tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})