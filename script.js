function initialize() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
initialize();
function textAnimate() {
  var clutter = "";
  document.querySelector("#main-loader h1").textContent.split("")
    .forEach(function (char) {
      clutter += `<span>${char}</span>`
    })
  document.querySelector("#main-loader h1").innerHTML = clutter;



}
textAnimate()

var tl = gsap.timeline();
tl.to("#main-loader h1 span", {
  opacity: 1,
  duration: .3,
  ease: Expo.easeInOut,
  stagger: .1
})
tl.from("#main-loader h1 span", {
  y: 20,
  duration: .5,
  ease: Expo.easeInOut,
  stagger: .07,
  opacity: 0.3
})
tl.to("#loader #main-loader", {
  duration: .8,
  opacity: ".7",
  top: '-100%'
})
tl.to("#loader", {
  top: '-100%',
  // duration: .4,
})

tl.to("#video", {
  scrollTrigger: {
    trigger: " #button",
    scrub: 5,
    start: "top 90%",
    end: "top 30%",
    scroller: "#main"
    // markers: true
  },
  // height: "100vh",
  duration: 4,
  ease: Sine.easeInOut,
  width: "100vw"
})
tl.to(".image span", {
  scrollTrigger: {
    trigger: ".image",
    start: "top 40%",
    scroller: "#main",
  },
  duration: 1,
  width: "100%"
})
function reveal() {
  document.querySelectorAll(".reveal")
    .forEach(function (elem) {
      var child = document.createElement("span");
      var parent = document.createElement("span");

      $(child).addClass("child")
      $(parent).addClass("parent")

      child.innerHTML = elem.innerHTML
      parent.appendChild(child);

      elem.innerHTML = "";
      elem.appendChild(parent);
    });
}
reveal()
tl.from(".child", {
  y: 200,
  ease: Power3.easeInOut,
  stagger: .2,
  skewY: 5,
  delay: -2,
  duration: 2
})

tl.from("#about1 h1 .child", {
  scrollTrigger: {
    trigger: "#page-2",
    start: "top 10%",
    // markers: true,
    scroller: "#main"
  },
  y: 200,
  ease: Power3.easeInOut,
  stagger: .2,
  skewY: 10,
  delay: -1,
  duration: 1
})

gsap.from("#page-2 #about2 p, #about1 h1, #about1 h3", {
  scrollTrigger: {
    trigger: "#about2",
    start: "top 60%",
    scroller: "#main"
  },
  y: 300,
  ease: Power3.easeInOut,
  duration: 1,
})

gsap.from(".types p", {
  scrollTrigger: {
    trigger: ".image",
    start: "top 40%",
    scroller: "#main",
  },
  y: 100,
  ease: Power3.easeInOut,
  duration: 1.5,
})

function imgName() {

  document.querySelectorAll(".image").forEach(function (val, index) {
    var names = val.children[5]
    $(val).on("mousemove", function (dets) {
      var dim = val.getBoundingClientRect();
      $(names).css("top", `${dets.clientY - dim.top}px`);
      $(names).css("left", `${dets.clientX - dim.left}px`);
      $(names).css("display", "flex");
    })
    $(val).on("mouseleave", function (dets) {
      $(names).css("display", "none");
    })
  })
}
imgName();

const color = document.querySelector(".color")
const colorInput = document.querySelector(".color-input")

colorInput.addEventListener("input", function () {
  color.style.backgroundColor = colorInput.value
})
$(document).ready(function () {
  new Swiper('.swiper-container', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    grabCursor: true,

    spaceBetween: 20,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1028: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
});



function videoPlay3() {
  const play3 = document.querySelector("#drag");
  const playCircle3 = document.querySelector(".container");
  playCircle3.addEventListener("mousemove", function (dets) {
    var dem = document.querySelector(".container").getBoundingClientRect()
    play3.style.top = `${dets.clientY - dem.top + 200}px`
    play3.style.left = `${dets.clientX - dem.left + 200}px`
    play3.style.display = `flex`
  })
  playCircle3.addEventListener("mouseleave", function (dets) {
    var dem = document.querySelector(".container").getBoundingClientRect()
    play3.style.top = `${dets.clientY - dem.top}px`
    play3.style.left = `${dets.clientX - dem.left}px`
    console.log("jj");
    play3.style.display = `none`
  })
};
videoPlay3();