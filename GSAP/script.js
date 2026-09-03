gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate:360,
    backgroundColor: "green",
    borderRadius: "50%",
   
})

gsap.from("#box2", {
    x: 1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor: "blue",
    borderRadius: "50%"
})

gsap.from("h1", {
    opacity:0,
    color: "red",
    duration: 2,
    delay:1,
    y: 30,
    x:30,
    stagger:1,
})