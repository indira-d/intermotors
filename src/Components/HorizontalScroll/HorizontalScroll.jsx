import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container">
        <div className="panel">
           <img src='/assets/car.svg' alt='' className='panel_img'/>
           <div className="horizontal_text">
            <div className="horizontal_title">TESLA MODEL 3</div>
            <div className="horizontal_subtitle">Specs Performance</div>
            <div className="horizontal_description">TESLA MODEL 3 - премиум седан с высокой производительностью и передавыми функциями самоуправления</div>
           </div>
        </div>
        <div className="panel">
           <img src='/assets/car.svg' alt='' className='panel_img'/>
           <div className="horizontal_text">
            <div className="horizontal_title">TESLA MODEL 3</div>
            <div className="horizontal_subtitle">Specs Performance</div>
            <div className="horizontal_description">TESLA MODEL 3 - премиум седан с высокой производительностью и передавыми функциями самоуправления</div>
           </div>
        </div>
        <div className="panel">
          <img src='/assets/car.svg' alt='' className='panel_img'/>
          <div className="horizontal_text">
            <div className="horizontal_title">TESLA MODEL 3</div>
            <div className="horizontal_subtitle">Specs Performance</div>
            <div className="horizontal_description">TESLA MODEL 3 - премиум седан с высокой производительностью и передавыми функциями самоуправления</div>
           </div>
        </div>
      </div>
    </div>
  );
}
