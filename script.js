
function Page1() {
    let tl = gsap.timeline()

tl.from(".logo", {
    y: -30,
    duraction: 1.5,
    delay :.5
})

tl.from(".nav li", {
    y: -50,
    duraction: 1.5,
    delay :.5,
    stagger: .5
})

tl.from(" .i", {
    y: -50,
    duraction: 1.5,
    delay :.5,
    stagger: .5
})

tl.from(".img", {
    x: -1000,
    duraction: 1.5,
    delay :.5,
    stagger: .5
})

tl.from(".hero-container h1", {
    x: -1000,
    duraction: 1.5,
    delay :.5,
    stagger: .5
})

tl.from(".hero-container p", {
    x: -1000,
    duraction: 1.5,
    delay :.5,
    stagger: .5
})
}
Page1()


let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-2' ,
        scroller:'body',
        stagger: .5
            
        
    }
})

t2.from('.section-2 h2', {
    x:1000,
    duraction: 1,
    delay:.5
})

t2.from('.section-2 p', {
    x:-1000,
    duraction: 1,
    delay:.5
})



