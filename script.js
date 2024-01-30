const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
  
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })

    .to(".boundingelem", {
        y: '0',
        stagger: .2,
        duration: 2,
        // Delay: -1,
        ease: Expo.easeInOut
    })

    .from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        // Delay: -1
    })
}


function circleCpataKaro() { 
    var xscale = 1;
    var yscale = 1;

    var xpre = 0;
    var ypre = 0;

    window.addEventListener("mousemove" , function (dets) {
     xscale = gsap.utils.clamp(.8,1.2 , dets.clientX-xpre);
     yscale = gsap.utils.clamp(.8,1.2, dets.clientY-ypre);

    xpre= dets.clientX;
    ypre= dets.clientY;

    circleMouseFollower(xscale,yscale);
    });
    
}

function circleMouseFollower (xscale,yscale){
    window.addEventListener("mousemove" ,function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale} , ${yscale})`;
    })
}

circleMouseFollower();
circleCpataKaro();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mousemove" , function (dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX
        });
    });
});
document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove" , function (dets) {
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1
        })
        
    });
    
});