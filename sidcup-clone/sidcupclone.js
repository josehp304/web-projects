var crsr = document.querySelector(".cursor");
var crsrb = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrb.style.left = dets.x - 200 + "px";
  crsrb.style.top = dets.y - 200 + "px";
});

gsap.to(".nav", {
  backgroundColor: "black",
  height: "120px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -20%",
    end: "top -21%",
    scrub: 2,

    // markers: true,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "10%",
    end: "50%",
    scrub: 2,
    // markers: true,
  },
});

gsap.from("#up", {
  x: -100,
  y: -100,
  scrollTrigger: {
    trigger: ".quotes",
    scroller: "body",

    // start: "10%",
    // end: "100",
    scrub: 3,
    duration: 2,
  },
});

gsap.from("#down", {
  x: 100,
  y: 100,
  scrollTrigger: {
    trigger: ".quotes",
    scroller: "body",
    scrub: 3,
  },
});
