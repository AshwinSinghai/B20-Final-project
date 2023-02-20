// --- to create multiple colered boxes ---
function createColorBoxes(tell_divs = 6, parent_name = "upbar") {
  iniColor = 255 / tell_divs;
  for (var i = 0; i < tell_divs; i++) {
    tempColor = 225;
    tempColor = tempColor - iniColor * i;
    var div = document.createElement("div");
    div.style.width = "20%";
    div.style.height = "100%";
    div.style.backgroundColor = `rgb(${tempColor}, ${tempColor}, ${tempColor})`;
    document.getElementById(parent_name).appendChild(div);
  }
}

createColorBoxes();

// createColorBoxes(parent_name='nupbar')

function createtimeline(
  slider_pos = "40vw",
  nheadcolor = "white",
  pb_ratio = 0
) {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".circle_scroller",
      end: "+=" + window.innerHeight * 10,
      start: "top top",
      // markers: true,
      pin: ".circle_scroller",
      scrub: true,
    },
  });

  tl.from(".imgslider", {
    x: slider_pos,
    // right: "0%",
    ease: Power0,
  })
    .to(
      ".info_div",
      {
        opacity: 0,
        ease: Back,
      },
      "info_invi"
    )
    .to(
      ".slider>h1",
      {
        y: 200,
        delay: -0.01,
        ease: Power0,
      },
      "info_invi"
    )
    .to(
      ".img_div",
      {
        scale: 0,
        ease: Power4,
        delay: -0.1,
      },
      "same"
    )
    .to(
      ".circle",
      {
        scale: 0,
        duration: 2,
        ease: Power0,
      },
      "same"
    )
    .to(
      ".top img",
      {
        scale: 0,
        ease: Power0,
        duration: 2,
        delay: 0.01,
      },
      "same"
    )
    .to(
      ".btm img",
      {
        rotate: "-180deg",
        ease: Power0,
        duration: 2,
        delay: 0.01,
        stagger: 0.08,
        scale: 0,
      },
      "same"
    )
    .to(".turn_w", {
      delay: -2.3,
      color: "white",
    })
    .to(".img_black", {
      delay: -2.3,
      opacity: 0,
    })
    .to(".img_wht", {
      delay: -2.3,
      opacity: 1,
    })
    .to(
      ".innercircle",
      {
        scale: 0,
        ease: Power0,
        duration: 2.4,
        delay: -0.0095,
      },
      "same"
    )
    .from(
      ".eclipse",
      {
        scale: 0.5,
        y: 500,
        delay: -0.4,
        ease: Power0,
      },
      "same"
    )
    .to(".eclipse", {
      delay: -1.8,
      opacity: 0,
      ease: Power4,
    })
    .from(
      ".circle_scroller>h1",
      {
        rotate: "40deg",
        x: -200,
        y: 900,
        ease: Power0,
        delay: 0.3,
      },
      "same"
    )
    .to("#pink_box", {
      delay: 0.5,
      duration: 4,
      // transform: "translate(0%, -150%)",
      top: 0,
      ease: Power0,
    })
    .to("#pink_box", {
      delay: 1,
      duration: 3,
      transform: `translate(${pb_ratio}%, -250%)`,
      ease: Power0,
    })
    .to("#main_image>img", {
      delay: -13,
      scale: 1,
      ease: Power0,
      duration: 6,
    })
    .to(
      ".circle_scroller",
      {
        // delay: 0.5,
        y: "-100%",
        ease: Power0,
        display: "none",
        pointerEvents: "none",
        zIndex: -1,
        duration: 2,
      },
      "z-1"
    )
    .to(
      ".circle_scroller>h1, .overlay",
      {
        delay: 1.5,
        ease: Power0,
        display: "none",
        zIndex: -1,
      },
      "z-1"
    )
    .to("#main_image", {
      ease: Power0,
      display: "none",
      pointerEvents: "none",
      opacity: 0,
      zIndex: -1,
    })
    .from(".couple_circles .cirs", {
      top: "150%",
      scale: 0.7,
      stagger: 0.09,
      ease: Power0,
    })
    .to(
      ".couple_circles .cirs:nth-child(1)",
      {
        left: "50%",
        ease: Power0,
      },
      "cirs"
    )
    .to(
      ".couple_circles .cirs:nth-child(2)",
      {
        left: "50%",
        ease: Power0,
      },
      "cirs"
    )
    .to(".couple_circles .cirs", {
      scale: 0.7,
      ease: Power0,
    })
    .to(".couple_circles .cirs", {
      scale: 7,
      ease: Power0,
      duration: 2,
    })
    .to(".content_dwn", {
      delay: -1.6,
      borderColor: "#fff",
      ease: Expo.ease,
    })
    .from(
      ".dot-div:nth-child(2)",
      {
        x: "95.2%",
        ease: Power0,
        delay: -2.3,
        duration: 5,
      },
      "gradient-same"
    )
    .to(".count-text>div", {
      y: "-100%",
      delay: -2.6,
      ease: Power0,
    })
    .to(
      ".nheady>h1, .ndwnbar",
      {
        color: nheadcolor,
        ease: Power0,
        delay: -4.1,
      },
      "gradient-name"
    )
    .from(
      ".gradient_div",
      {
        delay: -0.7,
        left: "300vw",
        ease: Power0,
        duration: 12,
      },
      "gradient-same"
    )
    .to(
      "#flare-text1",
      {
        delay: 1.3,
        duration: 1,
        opacity: 0,
        ease: Power0,
      },
      "gradient-same"
    )
    .to(
      "#flare-text2",
      {
        delay: 3,
        duration: 2,
        opacity: 1,
        ease: Power0,
      },
      "gradient-same"
    )
    .from(
      ".dot-div:nth-child(3)",
      {
        delay: 5,
        x: "97.6%",
        ease: Power0,
        duration: 4,
      },
      "gradient-same"
    )
    .to(
      ".count-text>div",
      {
        y: "-200%",
        ease: Power0,
        delay: 6,
      },
      "gradient-same"
    )
    .from(
      ".rising_shack>div",
      {
        delay: -1.3,
        y: "100%",
        ease: Power0,
        stagger: 0.14,
        duration: 1,
      },
      "rising"
    )
    .from(
      ".small_rising_shack",
      {
        delay: -0.7,
        y: "100%",
        ease: Power0,
      },
      "rising"
    )
    .to(
      ".small_rising_shack",
      {
        delay: 0.5,
        x: -160,
        ease: Power0,
      },
      "rising"
    )
    .to(".lower_shack", {
      delay: -0.2,
      x: -80,
      ease: Power0,
    });
}

const windowwidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const windowheight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

if (windowwidth < 481) {
  createtimeline(
    (slider_pos = "0vw"),
    (nheadcolor = "black"),
    (pb_ratio = -50)
  );
} else {
  createtimeline();
}

// --- initial properties of next page ---

gsap.set(".cirs:nth-child(1)", { zIndex: 4, left: "40%" });
gsap.set(".cirs:nth-child(2)", { zIndex: 3, left: "58%" });

gsap.set(".dot-div:nth-child(1)", { zIndex: 4, backgroundColor: "white" });
gsap.set(".dot-div:nth-child(2)", {
  zIndex: 5,
  backgroundColor: "white",
  x: "0%",
  opacity: 1,
});
gsap.set(".dot-div:nth-child(3)", {
  zIndex: 6,
  backgroundColor: "white",
  x: "0%",
  opacity: 1,
});

// .eventCallback("onComplete", null)