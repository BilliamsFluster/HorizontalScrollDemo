

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration:1.2,
  easing:(t) => Math.min(1,1.001 - Math.pow(2,-10 *t))
});

function raf(time){
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf)

const section = document.getElementById("vertical");
const colLeft = document.querySelector(".colLeft");
const timeline = gsap.timeline({paused:true});

timeline.fromTo(colLeft,{y:0},{y: '170vh', duration:1, ease:'none'},0);

const scroll = ScrollTrigger.create({
    animation: timeline,
    trigger: section,
    start:'top top',
    end:'bottom center',
    scrub: true


})

const section2 = document.getElementById("horizontal");
let boxItems = gsap.utils.toArray(".horizontalItem");

gsap.to(boxItems,
    {
        xPercent: -100 *(boxItems.length - 1),
        ease: 'sine.out',
        scrollTrigger:
        {
            trigger:section2,
            pin:true,
            scrub: 3,
            snap: 1 / (boxItems.length - 1),
            end: "+=" + section2.offsetWidth,
        }
    })
