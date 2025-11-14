import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-AKDPFH6R.js";

// projects/shared-lib/src/lib/animations/general.animation.ts
var fadeinAnime = trigger("fadein", [
  state("void", style({ opacity: 0 })),
  transition("void => *", [
    style({ opacity: 0 }),
    animate("900ms ease-out", style({ opacity: 1 }))
  ])
]);
var slidelefttitleAnime = trigger("slidelefttitle", [
  transition("void => *", [
    style({ opacity: 0, transform: "translateX(150%)" }),
    animate("900ms 300ms ease-out", style({ transform: "translateX(0%)", opacity: 1 }))
  ]),
  transition("* => void", [
    style({ position: "absolute", opacity: 1, transform: "translateX(10%)" }),
    animate("200ms 10ms ease-in", style({ transform: "translateX(-50%)", opacity: 0 }))
  ])
]);
var droptopAnime = trigger("droptop", [
  transition("void => *", [
    style({ opacity: 0, transform: "translateY(-150%)" }),
    animate("900ms 300ms ease-out", style({ transform: "translateY(0%)", opacity: 1 }))
  ])
]);
var zoomUnzoomAnime = trigger("_zoom", [
  state("makezoom", style({
    color: "#fff",
    opacity: "0.5",
    transform: "scale(1)"
  })),
  state("un_zoom", style({
    color: "#e74c3c",
    opacity: "1",
    transform: "scale(1.1)"
  })),
  transition("makezoom <=> un_zoom", animate("100ms ease-out"))
]);
var generalAnime = trigger("generalAnimation", [
  /**
   * @slide
   */
  transition("* => slide", [
    style({ opacity: 0, transform: "translateX(150%)" }),
    animate("900ms 300ms ease-out", style({ transform: "translateX(0%)", opacity: 1 }))
  ]),
  transition("slide => *", [
    style({ position: "absolute", opacity: 1, transform: "translateX(10%)" }),
    animate("200ms 10ms ease-in", style({ transform: "translateX(-50%)", opacity: 0 }))
  ]),
  /**
   * @fade
   */
  transition("* => fade", [
    style({ opacity: 0 }),
    animate("1700ms ease-out", style({ opacity: 1 }))
  ]),
  transition("fade => *", [
    style({ position: "absolute", opacity: 1 }),
    animate("50ms ease-in", style({ opacity: 0 }))
  ]),
  /**
   * @verticalSlide
   */
  transition("* => verticalSlide", [
    style({ opacity: 0, transform: "translateY(-150%)" }),
    animate("900ms 300ms ease-out", style({ transform: "translateY(0%)", opacity: 1 }))
  ]),
  transition("verticalSlide => *", [
    style({ position: "absolute", opacity: 1, transform: "translateY(10%)" }),
    animate("200ms 10ms ease-in", style({ transform: "translateY(50%)", opacity: 0 }))
  ]),
  /**
   * @slide3D
   */
  transition("* => slide3D", [
    style({ opacity: 0, transform: "translateZ(150%)" }),
    animate("900ms 300ms ease-out", style({ transform: "translateZ(0%)", opacity: 1 }))
  ]),
  transition("slide3D => *", [
    style({ position: "absolute", opacity: 1, transform: "translateZ(10%)" }),
    animate("200ms 10ms ease-in", style({ transform: "translateZ(-50%)", opacity: 0 }))
  ]),
  /**
   * @slideAngleTopRight
   */
  transition("* => slideAngleTopRight", [
    style({ opacity: 0, transform: "translate(150%, -150%)" }),
    animate("900ms 300ms ease-out", style({ transform: "translateY(0%, 0%, 0%) rotate(0deg)", opacity: 1 }))
  ]),
  transition("slideAngleTopRight => *", [
    style({ position: "absolute", opacity: 1, transform: "translate(10%, 0)" }),
    animate("400ms 10ms ease-in", style({ transform: "translate(-100%, 100%)", opacity: 0 }))
  ]),
  /**
   * @cubicBezier
   */
  transition("* => cubicBezier", [
    style({ opacity: 0, transform: "translateX(150%)" }),
    animate("900ms 300ms cubic-bezier(.36,.66,.04,1)", style({ transform: "translateX(0%)", opacity: 1 }))
  ]),
  transition("cubicBezier => *", [
    style({ position: "absolute", opacity: 1, transform: "translateX(10%)" }),
    animate("200ms 10ms cubic-bezier(.36,.66,.04,1)", style({ transform: "translateX(-50%)", opacity: 0 }))
  ]),
  /**
   * @spin
   */
  transition("* => spin", [
    style({ opacity: 0, transform: "translateX(150%)" }),
    animate("900ms 300ms ease-out", style({ transform: "translateX(0%)", opacity: 1 }))
  ]),
  transition("spin => *", [
    style({ position: "absolute", opacity: 1, transform: "translateX(10%)" }),
    animate("200ms 10ms ease-in", style({ transform: "translateX(-50%)", opacity: 0 }))
  ])
]);
var animeImages = trigger("fadeImage", [
  transition("* => fade", [
    style({ opacity: 0 }),
    animate("900ms ease-out", style({ opacity: 1 }))
  ]),
  transition("fade => *", [
    style({
      /** position: 'absolute',**/
      opacity: 1
    }),
    animate("50ms ease-in", style({ opacity: 0 }))
  ])
]);
var animeHeader = trigger("animeHeader", [
  transition("* => fade", [
    style({ opacity: 0 }),
    animate("900ms ease-out", style({ opacity: 0 }))
  ]),
  transition("fade => *", [
    style({
      /** position: 'absolute',**/
      opacity: 1
    }),
    animate("50ms ease-in", style({ opacity: 0 }))
  ])
]);
var comeBottom = trigger("comeBottom", [
  transition("* => come", [
    style({ transform: "translateY(150%)" }),
    animate("300ms 100ms ease-out", style({ transform: "translateY(0%)" }))
  ]),
  transition("come => *", [
    style({ transform: "translateY(0%)" }),
    animate("300ms 10ms ease-in", style({ transform: "translateY(150%)" }))
  ])
]);
var animeCitys = trigger("fadeCity", [
  state("true", style({
    // height: '200px',
    opacity: 1
    // background: 'yellow'
  })),
  state("false", style({
    // height: '100px',
    opacity: 0
    // background: 'blue'
  })),
  transition("* => true", [
    style({ opacity: 0 }),
    animate("900ms ease-out", style({ opacity: 1 }))
  ]),
  transition("* => false", [
    style({
      /** position: 'absolute',**/
      opacity: 1
    }),
    animate("50ms ease-in", style({ opacity: 0 }))
  ])
]);
var openClose = trigger("openClose", [
  state("open", style({
    height: "*",
    opacity: 1,
    transform: "translateY(-1px)",
    display: "block"
  })),
  state("closed", style({
    height: "0",
    opacity: 0,
    transform: "none",
    display: "none"
  })),
  transition("open => closed", [
    animate("0.3s")
  ]),
  transition("closed => open", [
    animate("0.3s")
  ])
]);
var shakeBellIcon = trigger("shakeBellIcon", [
  state("open", style({
    transform: "translateX(0)"
  })),
  state("closed", style({
    transform: "translateX(0)"
  })),
  transition("open => closed", [
    animate("0.1s ease-in", style({ transform: "translateX(-5px)" })),
    animate("0.1s ease-out", style({ transform: "translateX(5px)" })),
    animate("0.1s ease-in", style({ transform: "translateX(-5px)" })),
    animate("0.1s ease-out", style({ transform: "translateX(5px)" })),
    animate("0.1s ease-in", style({ transform: "translateX(-5px)" })),
    animate("0.1s ease-out", style({ transform: "translateX(5px)" })),
    animate("0.1s ease-in", style({ transform: "translateX(0)" }))
  ]),
  transition("closed => open", [
    animate("0.1s ease-in", style({ transform: "translateX(-5px)" })),
    animate("0.1s ease-out", style({ transform: "translateX(5px)" })),
    animate("0.1s ease-in", style({ transform: "translateX(-5px)" })),
    animate("0.1s ease-out", style({ transform: "translateX(5px)" })),
    animate("0.1s ease-in", style({ transform: "translateX(-5px)" })),
    animate("0.1s ease-out", style({ transform: "translateX(5px)" })),
    animate("0.1s ease-in", style({ transform: "translateX(0)" }))
  ])
]);
var rotateArrow = trigger("rotateArrow", [
  state("open", style({
    transform: "rotateZ(90deg)"
  })),
  state("closed", style({
    transform: "none"
  })),
  transition("open => closed", [
    animate("0.3s")
  ]),
  transition("closed => open", [
    animate("0.3s")
  ])
]);
var rotateFull = trigger("rotateFull", [
  state("open", style({
    transform: "rotateY(350deg)"
  })),
  state("closed", style({
    transform: "none"
  })),
  transition("open => closed", [
    animate("0.5s")
  ]),
  transition("closed => open", [
    animate("0.5s")
  ])
]);
var scaleSmooth = trigger("scaleSmooth", [
  state("open", style({
    transform: "scale(1.1)",
    backgroundColor: "--app-color-primary"
  })),
  state("closed", style({
    transform: "*"
  })),
  transition("open => closed", [
    animate("300ms 100ms ease-in")
  ]),
  transition("closed => open", [
    animate("900ms 300ms cubic-bezier(.36,.66,.04,1)", style({
      transform: "scale(1.1)",
      backgroundColor: "--app-color-primary"
    }))
  ])
]);
var slideInAnimation = trigger("routeAnimations", [
  /* transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ], { optional: true })
    ])
  ]), */
  transition("* <=> *", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ], { optional: true }),
    query(":enter", [
      style({ left: "-100%" })
    ], { optional: true }),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(":leave", [
        animate("200ms ease-out", style({ left: "100%", opacity: 0 }))
      ], { optional: true }),
      query(":enter", [
        animate("300ms ease-out", style({ left: "0%" }))
      ], { optional: true }),
      query("@*", animateChild(), { optional: true })
    ])
  ])
]);

export {
  generalAnime,
  openClose,
  shakeBellIcon,
  scaleSmooth,
  slideInAnimation
};
//# sourceMappingURL=chunk-6C27QOWO.js.map
