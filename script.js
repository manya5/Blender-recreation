function loco() {
    function init() {
      gsap.registerPlugin(ScrollTrigger);
  
      // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        lerp: 0.08,
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);
  
      // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform
          ? "transform"
          : "fixed",
      });
  
      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
    }
  
    init();
}
  
loco();


let tl = gsap.timeline();
tl.to(".loader-anime", {
    left: 0,
    duration: .8,
})
tl.to(".loader-anime", {
    width: 0,
})
tl.to(".loader-r-text", {
    delay: .5,
    left: "62%",
    duration: .8
}, 'a')
.to(".upr-stripe, .lwr-stripe", {
    delay: .5,
    transform: "scaleX(10)",
    duration: .8
}, 'a')
.to(".upr-stripe, .lwr-stripe", {
    transform: "scaleX(1)",
    duration: .8
}, 'b')
.to(".loader-title", {
    display: "flex",
}, 'b')
.to(".loader-title span", {
    opacity: 1,
    duration: .8,
    stagger: .15,
    ease: "expo.out"
}, 'b')
.to(".loader-r-text", {
    display: "none",
}, 'slide')
.to(".loader-title span", {
    display: "none"
}, 'slide')
.to(".loader-anime", {
    width: "100%",
    duration: .4
})
.to(".loader-anime", {
    left: "100%",
    duration: .4
})
.to(".loader-anime", {
    display: "none"
})
.to(".loader", {
    left: "200%",
    duration: .4
})
// .from(".btm-left button,.shape-top-rgt,.top-part",
//     { 
//         // opacity: 0,
//         // duration:.7,
//         // stagger:.4,
//         // y:-200,
//         opacity:0,
//     duration:.2,
//     stagger:1,
//     scale: 0,
//     ease: "bounce.out"
//     }
// )
.from(".rolling-text", {
        duration:.1,
        stagger:.2,
        opacity: 0,
        scale: 0,

}, 'links')

.from(".btm-left button", {
        duration:.1,
        stagger:.2,
        opacity: 0,
        scale: 0,

}, 'links')
// .from(".blender-logo-img", {
//     // rotate: "-180deg",
//     // scale: 0,
//     x: -100,
//     opacity: 0,
//     duration: .2
// })
// .from(".logo-letters", {
//     rotate: "-180deg",
//     opacity: 0,
//     scale: 0,
//     y: 100,
//     // duration: .5,
//     stagger: .1

// })
.from(".media-links",{
    opacity:0,
    duration:.2,
    stagger:0.2,
    scale: 0,
    ease: "bounce.out"
    // ease: "elastic.out(1,0.1)"
}, 'links')

let crsr = document.querySelector(".cursor");
let glowingCrsr = document.querySelector(".glowing-crsr");
let landingBg = document.querySelector(".ecosystem-section");
let landingPage = document.querySelector(".landing-page");
let ecoPage = document.querySelector(".ecosystem-section");
let footer = document.querySelector(".main-footer");
let allImages = document.querySelectorAll("img");



window.addEventListener("mousemove", dets => {
    gsap.to(crsr, {
        x: dets.clientX - 50,
        y: dets.clientY - 50
    })
})

window.addEventListener("mousemove", dets => {
    gsap.to(glowingCrsr, {
        x: dets.clientX - 150,
        y: dets.clientY - 150
    })
})


allImages.forEach(img => {
    img.addEventListener("mousemove", function(){
        glowingCrsr.style.opacity = .2;
    })
    img.addEventListener("mouseout", function(){
        glowingCrsr.style.opacity = .6;
    })
})



landingPage.addEventListener("mousemove", function(){
    // glowingCrsr.style.opacity = 1;
    crsr.style.opacity = 1;
    glowingCrsr.style.opacity = 0;
})
landingPage.addEventListener("mouseout", function(){
    // glowingCrsr.style.opacity = 0;
    crsr.style.opacity = 0;
    glowingCrsr.style.opacity = .6;
})

footer.addEventListener("mousemove", function(){
    // glowingCrsr.style.opacity = 1;
    crsr.style.opacity = 1;
    glowingCrsr.style.opacity = 0;
})
footer.addEventListener("mouseout", function(){
    // glowingCrsr.style.opacity = 0;
    crsr.style.opacity = 0;
    glowingCrsr.style.opacity = .6;
})

ecoPage.addEventListener("mousemove", function(){
    glowingCrsr.style.background = "rgba(255, 255, 255, 0.59)";
})

ecoPage.addEventListener("mouseout", function(){
    glowingCrsr.style.background = "#2d9a82bc";
})

let navMenu = document.querySelector(".nav-menu");
let navOpen = document.querySelector(".nav-open-btn");
let navClose = document.querySelector(".nav-close-btn");
navOpen.addEventListener("click", function(){
    navMenu.style.display = "flex";
})
navClose.addEventListener("click", function(){
    navMenu.style.display = "none";
})



let topLinks = document.querySelectorAll(".top-part a");
let cursor = document.querySelector(".cursor");
let cursorDot = document.querySelector(".cursor-dot");
let crsrLines = document.querySelectorAll(".crsr-lines");

topLinks.forEach(tlink => {
    tlink.addEventListener("mousemove", function(){
        cursorDot.style.display = "none";
        cursor.style.borderLeft = "2px solid rgba(255, 255, 255, 0.8)";
        cursor.style.borderRight = "2px solid rgba(255, 255, 255, 0.8)";
        crsrLines.forEach(crsrline => {
            crsrline.style.opacity = "0"
        })
        
    })
    tlink.addEventListener("mouseleave", function(){
        cursorDot.style.display = "block"
        cursor.style.borderLeft = "2px solid rgba(0, 0, 0, 0)";
        cursor.style.borderRight = "2px solid rgba(0, 0, 0, 0)";
        crsrLines.forEach(crsrline => {
            crsrline.style.opacity = "1"
        })
    })
})

let footerLinks = document.querySelectorAll(".f-links");
footerLinks.forEach(fLinks => {
    fLinks.addEventListener("mousemove", function(){
        cursorDot.style.display = "none";
        cursor.style.width = "5rem";
        cursor.style.height = "5rem";
        cursor.style.borderLeft = "2px solid rgba(255, 255, 255, 0.8)";
        cursor.style.borderRight = "2px solid rgba(255, 255, 255, 0.8)";
        cursor.style.backgroundColor = "#fff";
        crsrLines.forEach(crsrline => {
            crsrline.style.opacity = "0"
        })
        
    })
    fLinks.addEventListener("mouseleave", function(){
        cursorDot.style.display = "block";
        cursor.style.width = "6rem";
        cursor.style.height = "6rem";
        cursor.style.borderLeft = "2px solid rgba(0, 0, 0, 0)";
        cursor.style.borderRight = "2px solid rgba(0, 0, 0, 0)";
        cursor.style.backgroundColor = "transparent";
        crsrLines.forEach(crsrline => {
            crsrline.style.opacity = "1"
        })
    })
})


let openSourceText = document.querySelectorAll(".os-content h1");
openSourceText.forEach(osText => {
    osText.addEventListener("mousemove", function(){
        cursorDot.style.display = "none";
        cursor.style.width = "7rem";
        cursor.style.height = "7rem";
        cursor.style.borderLeft = "2px solid rgba(255, 255, 255, 0.8)";
        cursor.style.borderRight = "2px solid rgba(255, 255, 255, 0.8)";
        cursor.style.backgroundColor = "#fff";
        crsrLines.forEach(crsrline => {
            crsrline.style.opacity = "0"
        })
        
    })
    osText.addEventListener("mouseleave", function(){
        cursorDot.style.display = "block";
        cursor.style.width = "6rem";
        cursor.style.height = "6rem";
        cursor.style.borderLeft = "2px solid rgba(0, 0, 0, 0)";
        cursor.style.borderRight = "2px solid rgba(0, 0, 0, 0)";
        cursor.style.backgroundColor = "transparent";
        crsrLines.forEach(crsrline => {
            crsrline.style.opacity = "1"
        })
    })
})

let bsTl = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        trigger: ".blender-studio-section",
        start: "0% 0%",
        end: "top -1000%",
        scrub: 2,
        pin: true,
    }
});

bsTl.to(".bs-container", {
    duration: 1,
    transform: "translateX(-61%)",
})
.to(".bs-dot1",{
    scale: 50,
    duration: 1
})
.to(".bs-dot1",{
    opacity: 0,
}, 'b')
.to(".card-details1", {
    display: "flex"
}, 'b')
.to(".card-details1", {
    delay: 1,
    display: "none"
})
.to(".bs-dot1", {
    opacity: 1,
})
.to(".bs-dot1", {
    scale: 1,
    // opacity: 1,
    duration: 1
})

bsTl.to(".bs-container", {
    duration: 1,
    transform: "translateX(-120%)",
})
.to(".bs-dot2",{
    scale: 50,
    ease: "poweri.out",
    duration: 1
})
.to(".bs-dot2",{
    opacity: 0,
}, 'c')
.to(".card-details2", {
    display: "flex"
}, 'c')
.to(".card-details2", {
    delay: 1,
    display: "none"
})
.to(".bs-dot2", {
    scale: 1,
    opacity: 1,
    ease: "poweri.out",
    duration: 1
})

bsTl.to(".bs-container", {
    duration: 1,
    transform: "translateX(-182%)",
})
.to(".bs-dot3",{
    scale: 50,
    ease: "poweri.out",
    duration: 1
})
.to(".bs-dot3",{
    opacity: 0,
}, 'd')
.to(".card-details3", {
    display: "flex"
}, 'd')
.to(".card-details3", {
    delay: 1,
    display: "none"
})
.to(".bs-dot3", {
    scale: 1,
    opacity: 1,
    ease: "poweri.out",
    duration: 1
})

bsTl.to(".bs-container", {
    duration: 1,
    transform: "translateX(-200%)",
})
.to(".bs-dot4",{
    scale: 50,
    ease: "poweri.out",
    duration: 1
})
.to(".bs-dot4",{
    opacity: 0,
}, 'e')
.to(".card-details4", {
    display: "flex"
}, 'e')
.to(".card-details4", {
    delay: 1,
    display: "none"
})
.to(".bs-dot4", {
    scale: 1,
    opacity: 1,
    ease: "poweri.out",
    duration: 1
}, 'same')
.to(".bs-dot", {
    backgroundColor: "#000",
}, 'same')
.to(".blender-studio-section", {
    backgroundColor: "#8EA6B4",
    // backgroundColor: "#0C0B0B",
    duration: .1,
}, 'same')





function everythingYouNeedSection() {
    let eynTl = gsap.timeline({
        scrollTrigger: {
            scroller: ".main",
            trigger: ".eyn-section",
            pin: true,
            start: "255% top",
            end: "top -600%",
            scrub: 1
        }
    });
    eynTl.to(".eyn-circle", {
        rotate: "25deg",
        duration: 1
    }, '1')
    .to(".strp1 img", {
        rotate: "-25deg"
    }, '1')
    .to(".eyn-dets", {
        transform: "translateY(-100%)",
        duration: 1
    }, '1')
    .to(".strp2 img", {
        rotate: "-0deg"
    }, '1')
    .to(".eyn-heading", {
        opacity: 0
    }, '1')
    .to(".eyn-circle", {
        rotate: "50deg",
        duration: 1
    }, '2')
    .to(".strp2 img", {
        rotate: "-25deg"
    }, '2')
    .to(".eyn-dets", {
        transform: "translateY(-200%)",
        duration: 1
    }, '2')
    .to(".strp3 img", {
        rotate: "-0deg"
    }, '2')
    .to(".eyn-circle", {
        rotate: "75deg",
        duration: 1
    }, '3')
    .to(".strp3 img", {
        rotate: "-25deg"
    }, '3')
    .to(".eyn-dets", {
        transform: "translateY(-300%)",
        duration: 1
    }, '3')
    .to(".strp4 img", {
        rotate: "-0deg"
    }, '3')
    .to(".eyn-circle", {
        rotate: "100deg",
        duration: 1
    }, '4')
    .to(".strp4 img", {
        rotate: "-25deg"
    }, '4')
    .to(".eyn-dets", {
        transform: "translateY(-400%)",
        duration: 1
    }, '4')
    .to(".strp5 img", {
        rotate: "-0deg"
    }, '4')
    .to(".eyn-circle", {
        rotate: "125deg",
        duration: 1
    }, '5')      
    .to(".strp5 img", {
        rotate: "-25deg"
    }, '5')
    .to(".eyn-dets", {
        transform: "translateY(-500%)",
        duration: 1
    }, '5')
    .to(".strp6 img", {
        rotate: "-0deg"
    }, '5')
    
    
    
    
} 
everythingYouNeedSection();







function peopleSection() {

    peopleTl = gsap.timeline({
        scrollTrigger: {
            scroller: ".main",
            trigger: ".peoples-section",
            start: "225% top",
            end: "top -450%",
            pin: true,
            scrub: 2
        }
    })
    
    peopleTl.to(".ppl-container", {
        scaleY: 1,
        duration: .2
    }, 'text-split')
    .to(".uppr-img", {
        delay: .01,
        // top: "-130%",
        top: "-50%",
        duration: 3
    }, 'text-split')
    .to(".btm-img", {
        delay: .01,
        // top: "130%",
        top: "100%",
        duration: 3 
    }, 'text-split')
    .to(".main", {
        backgroundColor: "var(--darkColor)",
    })
    .from(".ppl1, .ppl2", {
        marginLeft: "10rem",
        x: "-250%",
        duration: 4,
    }, 'text-split')
    .from(".ppl3, .ppl4", {
        marginLeft: "10rem",
        x: "250%",
        duration: 4
    }, 'text-split')
    
}




peopleSection();






gsap.to(".moving-carousel", {
    // transform: "translateX(-50%) rotateZ(4deg)",
    transform: "translateZ(900px) rotateZ(6deg) rotateY(-90.1deg)",
    ease: "poweri.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".industry-section",
        // start: "top -200%",
        // end: "200% 80%",
        start: "100% -120%",
        end: "100% -160%",
        scrub: 2,
    }
})



// Shery.makeMagnet(".top-part a" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });







let lines = ["Blender is a public", "project hosted on", "blender.org, licensed", "as GNU GPL, owned", "by its contributors."];
let sentences = [];
lines.forEach(line => {
    sentences.push(line.split());
})


let typeTl = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        trigger: ".open-source-section",
        start: "50% 40%",
        end: "50% -100%%",
        scrub: .1,
        pin: true,
    }
});
typeTl.to(".title-opener-start path", {
    attr:{fill: "var(--blenderOrange)"},
    duration: .1
}, 'c1')
typeTl.to(".title-opener path", {
    attr:{fill: "var(--blenderOrange)"},
    duration: .1
}, 'c1')
typeTl.to(".open-source-section", {
    backgroundColor: "#0C0B0B",
    duration: .1
}, 'c1')
typeTl.to(".os-content", {
    height: "47%",
})


0
let firstSen = "";
sentences[0].forEach((w, idx) => {
    firstSen += w;
    typeTl.to(".text-line1", {
        
        ease: "power1.out",
        text: firstSen,
    }, 'open-text')
})
firstSen = "";
sentences[1].forEach((w, idx) => {
    firstSen += w;
    typeTl.to(".text-line2", {
        
        ease: "power1.out",
        text: firstSen,
    }, 'open-text')
})
firstSen = "";
sentences[2].forEach((w, idx) => {
    firstSen += w;
    typeTl.to(".text-line3", {
        
        ease: "power1.out",
        text: firstSen,
    }, 'open-text')
})
firstSen = "";
sentences[3].forEach((w, idx) => {
    firstSen += w;
    typeTl.to(".text-line4", {
        
        ease: "power1.out",
        text: firstSen,
    }, 'open-text')
})
firstSen = "";
sentences[4].forEach((w, idx) => {
    firstSen += w;
    typeTl.to(".text-line5", {
        
        ease: "power1.out",
        text: firstSen,
    }, 'open-text')
})

typeTl.to(".os-below-content", {
    transform: "translate(-50%, -20%)",
    ease: "poweri.out",
    duration: 3,
})


gsap.from(".glowing-crsr", {
    borderRadius: "10%",
    width: "1rem",
    height: "1rem",
    duration: .4,
    yoyo: true
})




function wavyTextAnimation(elementToWave) {
    let elements = document.querySelectorAll(`${elementToWave}`);

    elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";
    
        let textContainer = document.createElement("div");
        textContainer.classList.add("block");
    
        for (let letter of innerText) {
            let span = document.createElement("span");
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            span.classList.add("letter");
            textContainer.appendChild(span);
        }
    
        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });
    
    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.add("play");
        });
    
        element.addEventListener("mouseleave", () => {
            element.classList.remove("play");
        });
    });
    
}

wavyTextAnimation(".rolling-text");












var bdTl = gsap.timeline({
    scrollTrigger:{
        scroller: ".main",
        trigger: ".blender-dev-section",
        start:"top -35%",
        end:"top -150%",
        scrub: 2,
        pin: true,
    }
})



// bdTl.to(".wrapper .bd-cards", {
    //     transform: "translateY(-10%)",
    //     stagger: 1,
    //     duration: 2,
    // }, 'bdev')
    

let bdHeadTl = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        trigger: ".bd-heading",
        start:"top 80%",
        end:"top 0%",
        scrub: 1,
    
    }

});
bdHeadTl.from(".bd-heading h1", {
    scale: 0,
})
bdHeadTl.to(".bd-heading h1", {
    fontSize: "5rem",
})

bdTl.to(".wrapper .bd-cards",{
    transform: "translateX(-120%)",
    duration: 10,
}, 'bdev')





var footerTl = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        trigger: ".main-footer",
        start: "top 80%",
        end: "top -100%",
        scrub: 1,
    }
})
footerTl.to(".char1", {
    y:0,
    stagger:0.09,
    duration:0.3,
    opacity:1,
})
footerTl.to(".char2", {
    y:0,
    stagger:0.09,
    duration:0.3,
    opacity:1,
})
footerTl.to(".char3", {
    y:0,
    stagger:0.09,
    duration:0.3,
    opacity:1,
})
footerTl.to(".char4", {
    y:0,
    stagger:0.09,
    duration:0.3,
    opacity:1,
})

gsap.to(".footer-anime-div", {
    // height: "5rem",
    transform: "translateY(-4.9rem) scaleY(1)",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".footer-anime-div",
        start: "top 90%",
        end: "top 10%",
        scrub: 1,
    }
})





var t2 = gsap.timeline({
    scrollTrigger:{
     scroller:".main",
     trigger:".footer-subsection",
     start: "top 50%",
    //  end:"top -50%",
     end:"top 50%",
    //  scrub:1,
    }
 })
 t2.to("#fc1", {
     y:0,
    //  stagger:0.8,
    //  duration:0.8,
     opacity:1,
    
 })
 t2.to("#fc2", {
     y:0,
    //  stagger:0.09,
    //  duration:1,
    //  delay:0.7,
     opacity:1,
 
 })
 t2.to("#fc3", {
     y:0,
    //  stagger:0.09,
    //  duration:1,
    //  delay:0.7,
     opacity:1,
 
 })
 t2.to("#fc4", {
     y:0,
    //  stagger:0.09,
    //  duration:1,
    //  delay:0.7,
     opacity:1,

 })




//  Shery.makeMagnet(".f-c2" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });