function lenis() {

    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
        console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

}
lenis()




function page1() {
    var tl = gsap.timeline({
        scrollTrigger: {



            trigger: ".part1",
            scrub: true,
            pin: true,
            start: "50% 50%",
            end: "150% 50%",
            ease: "circ.out",
        }
    })

    tl.to(".rotate-div", {
        rotate: "-10deg",
        duration: 1,
        scrub: true,
        scale: .7,
        ease: "circ.out",


    }, "a")

    tl.to("#row-div1", {
        marginTop: "0%"
    }, "a")
    tl.to("#row-div2", {
        marginTop: "-15%"
    }, "a")
    tl.to("#row-div3", {
        marginTop: "-12%"
    }, "a")
    tl.to("#row-div4", {
        marginTop: "-16%"
    }, "a")
    tl.to("#row-div5", {
        marginTop: "-14%"
    }, "a");


    tl.to(".overlay-div h1", {
        opacity: 1,
    }, "a")
    tl.to(".overlay-div", {
        backgroundColor: "#000000b4"
    }, "a")

    tl.to(".scroling", {
        width: "100%",
        duration: 1
    }, 'a')
}
page1();
function page2() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "section",
            scrub: true,
            start: "0% 70%",
            end: "50% 50%",
            ease: "circ.out",
        }
    })
    tl2.to(".over-div-wrapper", {
        marginTop: 0,
        height: 0
    })


}
page2();


function textanimtion() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-head",
            start: "0% 50%",
            end: "100% 50%",
            scrub: true,

        }
    })

    tl3.to(".heading-hover h1", {
        width: "100%",
    }, "g")

    tl3.to(".heading-hover h2", {
        width: "100%",
        delay: .2,

    }, "g")
}
textanimtion();

function rightdives() {


    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "article",
            start: "10% 50%",
            end: "3% 50%",
            scrub: true,
        }


    })
    tl5.to(".c-one", {
        opacity: 1,
    })

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "article",
            start: "20% 30%",
            end: "10% 50%",
            scrub: true,
        }


    })
    tl6.to(".c-two", {
        opacity: 1,
    })

    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: "article",
            start: "50% 60%",
            end: "0% 50%",
            scrub: true,

        }


    })
    tl7.to(".c-thre", {
        opacity: 1,
    })

    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: "article",
            start: "60% 50%",
            end: "0% 50%",
            scrub: true,
        }


    })
    tl8.to(".c-for", {
        opacity: 1,
    })

    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: "article",
            start: "70% 50%",
            end: "10% 50%",
            scrub: true,


        }


    })
    tl9.to(".c-fiv", {
        opacity: 1,
    })

    var tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: "article",
            start: "86% 50%",
            end: "10% 50%",
            scrub: true,
        }


    })
    tl10.to(".c-sx", {
        opacity: 1,
    })

    gsap.to(".circle", {
        rotate: 120,
        marginLeft: "150%",
        scrollTrigger: {
            trigger: "article",
            start: "90% 20%",
            end: "93% 20%",
            scrub: true,
        }
    })



}
rightdives();

function textanimation2() {


    var tm = gsap.timeline({
        scrollTrigger: {
            trigger: "aside",
            start: "0% 50%",
            end: "100% 50%",
            scrub: true,
        }
    })

    tm.to(".heading-hover-as h1", {
        width: "100%",
    }, "f")

    tm.to(".heading-hover-as h2", {
        width: "100%",
        delay: .2,

    }, "f")
}
textanimation2();



function textanimation3() {




    var tm = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            start: "0% 50%",
            end: "13% 50%",
            scrub: true,
        }
    })

    tm.to(".heading-hover-m h1", {
        width: "100%",
    }, "e")

    tm.to(".heading-hover-m h2", {
        width: "100%",
        delay: .1,

    }, "e")
    var time = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            start: "0% 60%",
            end: "10% 50%",
            scrub: 1,
            ease: "circ.out",


        }
    })

    time.to(".over-div-wrapper-m", {
        height: 0,
        marginTop: 0,
    })
}
textanimation3();

function overwork() {
    var timeLie = gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            start: "50% 50%",
            end: "400% 100%",
            scrub: true,
            pin: true,
        }
    })

    timeLie.to(".first", {
        x: -50,

    }, "anim")

    timeLie.to(".second", {
        x: 50,

    }, "anim")

    timeLie.to(".top-footer", {
        top: '-50%'
    }, "anim")

    timeLie.to(".btn-footer", {
        bottom: "-50%",
    }, "anim")


}
overwork();

var footerdiv = gsap.timeline({
    scrollTrigger:{
        trigger:"#second-part",
        scrub:2,
        start:"50% 50%",
        end:"100% 50%",
        pin:true,
    }
})

footerdiv.to(".part-top",{
    top:"-50%",
    opacity:0,
    display:"none",
    zIndex:0
},'div')



footerdiv.to(".part-botom",{
    bottom:"-100%",
},'div')

footerdiv.to("#toph",{
    top:"100%",
},'div')



footerdiv.to("#btmh",{
    bottom:"-100%",
},'div')



footerdiv.to(".text2",{
    marginTop:"0%",
},'div')











function rotateimg() {

    var article = gsap.timeline({
        scrollTrigger: {
            trigger: "article",
            start: "5% 50%",
            end: "100% 50%",
            scrub: true
        }
    })

    article.to(".circle img", {
        rotate: 360
    })

}


rotateimg();
function blackdiv() {
    window.addEventListener("wheel", (dets) => {
        if (dets.deltaY > 0) {
            gsap.to(".btm-img", {
                transform: "translateX(-200%)",
                duration: 4,
                ease: "none",
                repeat: -1,
                
            })

        } else {
            gsap.to(".btm-img", {
                transform: "translateX(0%)",
                duration: 4,
                ease: "none",
                repeat: -1
            })


        }
    })
}


blackdiv();



