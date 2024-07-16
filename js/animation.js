function indexAnimation() {

    var navbartl = gsap.timeline()

    navbartl.from(".navbarLogo", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    })
    navbartl.from("#navbar-dropdown li", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
    })

    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#storyBox .storyHeading",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "end 80%",
            scrub: 3,
        }
    })

    tl1.from(".storyHeading", {
        x: -100,
        "opacity": 0,
        duration: 2,
        ease: "power3.out",
    }, "a")
        .from(".storyImg", {
            x: 100,
            "opacity": 0,
            duration: 2,
            ease: "power3.out",
        }, "a")
    gsap.from(".ourMission .missionText",
        {
            x: "-100%",
            duration: 3,

        }
    )

    gsap.from(".partnerSection .containers", {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#storyBox .storyHeading",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "end 20%",
            scrub: 5,
        }
    })


    gsap.from(".mouseScrol", {
        y: -17,
        "opacity": 0,
        duration: 2,
        ease: "power3.out",
        repeat: -1
    })
    gsap.from(".heroimgBox", {
        scale: 0,
        duration: 2,
        delay: 1,
        yoyo: true
    })
    gsap.from(".about-img",
        {
            x: "-100%",
            duration: 3,

        }
    )

    gsap.from(".para li", {
        x: 20,
        opacity: 0,
        stagger: 1
    })


    gsap.from(".iconSet", {
        scale: 0.8,
        duration: 4,
        yoyo: true,
        repeat: -1,
    })

    gsap.from('.serviceContainer .servCol', {
        x: -100,
        y: 100,
        duration: 3,
        dellay: 1,
        stagger: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: ".serviceContainer .servCol",
            scroller: "body",
            markers: false,
            start: "bottom 100%",
            end: "top 60%",
            scrub: 3,
        }
    })

}
indexAnimation()

function aboutAnimation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".whyChooseus",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 20%",
        }
    })
    tl3.from(".chooseUsImg", {
        y: 200,
        duration: 2,
        opacity: 0

    })
}
aboutAnimation()

// function servicesAnimation() {
//     // var tl4 = gsap.timeline({
//     //   })
//     gsap.from(".serv1", {
//         x: -300,
//         duration: 1,
//         dellay: 1,
//         stagger: 0.3,
//         scrollTrigger: {
//             trigger: ".AllSixSection ",
//             scroller: "body",
//             markers: true,
//             start: "top 90%",
//             end: "bottom 20%",      }
//     })
//     gsap.from(".serv2", {
//         x: 300,
//         duration: 1,
//         dellay: 1.5,
//         stagger: 0.3,
//         scrollTrigger: {
//             trigger: ".AllSixSection ",
//             scroller: "body",
//             markers: true,
//             start: "top 10%",
//             end: "bottom 20%",
//         }

//     })
//     gsap.from(".serv3", {
//         x: 300,
//         duration: 1,
//         dellay: 1.5,
//         stagger: 0.3,
//         scrollTrigger: {
//             trigger: ".AllSixSection serv3",
//             scroller: "AllSixSection",
//             markers: true,
//             start: "top 80%",
//             end: "bottom 20%",
//         }

//     })
// }
// servicesAnimation()

var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".strategicAdvertising .sunBox",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "bottom 50%",
        scrub:3
    }
})

tl5.from(".strategicAdvertising .sunBox", {
    y: 150,
    duration: 1,
    opacity:0,
    delay: 0.5,
    stagger: 0.3,
}, 'c')
tl5.from(".strategicAdvertising .strategicPara",{
    x:-300,
    duration: 1,
    opacity:0,
    stagger: 0.3,
    }, 'c')


gsap.from(".headingPart",{
        scale:0.5,
        duration:2,
        opacity:0,
        stagger: 0.3,
    
    })
var tl6 = gsap.timeline()


    tl6.from(".vecImg0 ",{
        x:-300,
        duration:2
    })
    tl6.from(".vecImg1 ",{
        scale:0.7,
        x:-180,
        duration:2,

        yoyo:true,
        repeat:-1
    })
    tl6.from(".vecImg2 ",{
        scale:0.7,
        duration:2,
        yoyo:true,
        repeat:-1
    })
    tl6.from(".vecImg3 ",{
        scale:0.7,
        x:-180,
        duration:2,
        yoyo:true,
        repeat:-1
    })
    