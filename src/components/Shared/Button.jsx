import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function TruckButton() {
    const buttonRef = useRef(null);
    const [done, setDone] = useState(false);

    // const handleClick = (e) => {
    //     e.preventDefault();

    //     if (!done) {
    //         const button = buttonRef.current;
    //         const box = button.querySelector(".box");
    //         const truck = button.querySelector(".truck");

    //         if (!button.classList.contains("animation")) {
    //             button.classList.add("animation");

    //             gsap.to(button, {
    //                 "--box-s": 1,
    //                 "--box-o": 1,
    //                 duration: 0.3,
    //                 delay: 0.5,
    //             });

    //             gsap.to(box, { x: 0, duration: 0.4, delay: 0.7 });

    //             gsap.to(button, {
    //                 "--hx": -5,
    //                 "--bx": 50,
    //                 duration: 0.18,
    //                 delay: 0.92,
    //             });

    //             gsap.to(box, { y: 0, duration: 0.1, delay: 1.15 });

    //             gsap.set(button, { "--truck-y": 0, "--truck-y-n": -26 });

    //             gsap.to(button, {
    //                 "--truck-y": 1,
    //                 "--truck-y-n": -25,
    //                 duration: 0.2,
    //                 delay: 1.25,
    //                 onComplete() {
    //                     gsap.timeline({
    //                         onComplete() {
    //                             button.classList.add("done");
    //                             setDone(true);
    //                         },
    //                     })
    //                         .to(truck, { x: 0, duration: 0.4 })
    //                         .to(truck, { x: 40, duration: 1 })
    //                         .to(truck, { x: 20, duration: 0.6 })
    //                         .to(truck, { x: 96, duration: 0.4 });

    //                     gsap.to(button, { "--progress": 1, duration: 2.4, ease: "power2.in" });
    //                 },
    //             });
    //         }
    //     } else {
    //         resetAnimation();
    //     }
    // };

    const handleClick = (e) => {
        e.preventDefault();
      
        if (!done) {
          const button = buttonRef.current;
          const box = button.querySelector(".box");
          const truck = button.querySelector(".truck");
      
          if (!button.classList.contains("animation")) {
            button.classList.add("animation");
      
            // Fade in the truck
            gsap.to(truck, { opacity: 1, duration: 0.3 });
      
            gsap.to(button, {
              "--box-s": 1,
              "--box-o": 1,
              duration: 0.3,
              delay: 0.5,
            });
      
            gsap.to(box, { x: 0, duration: 0.4, delay: 0.7 });
      
            gsap.to(button, {
              "--hx": -5,
              "--bx": 50,
              duration: 0.18,
              delay: 0.92,
            });
      
            gsap.to(box, { y: 0, duration: 0.1, delay: 1.15 });
      
            gsap.set(button, { "--truck-y": 0, "--truck-y-n": -26 });
      
            gsap.to(button, {
              "--truck-y": 1,
              "--truck-y-n": -25,
              duration: 0.2,
              delay: 1.25,
              onComplete() {
                gsap.timeline({
                  onComplete() {
                    button.classList.add("done");
                    setDone(true);
                  },
                })
                  .to(truck, { x: 0, duration: 0.4 })
                  .to(truck, { x: 40, duration: 1 })
                  .to(truck, { x: 20, duration: 0.6 })
                  .to(truck, { x: 96, duration: 0.4 });
      
                gsap.to(button, { "--progress": 1, duration: 2.4, ease: "power2.in" });
              },
            });
          }
        } else {
          resetAnimation();
        }
      };
      
    const resetAnimation = () => {
        const button = buttonRef.current;
        const truck = button.querySelector(".truck");
        const box = button.querySelector(".box");

        button.classList.remove("animation", "done");
        gsap.set(truck, { x: 4 });
        gsap.set(button, {
            "--progress": 0,
            "--hx": 0,
            "--bx": 0,
            "--box-s": 0.5,
            "--box-o": 0,
            "--truck-y": 0,
            "--truck-y-n": -26,
        });
        gsap.set(box, { x: -24, y: -6 });
        setDone(false);
    };

    return (
        <div className="flex justify-center my-20">
            <button
                ref={buttonRef}
                onClick={handleClick}
                className="truck-button relative w-48 h-14 p-3 text-black bg-[#00fffc] rounded-lg "
            >
                <span className={`${done ? "opacity-0" : "opacity-100"} transition-opacity font-semibold`}>
                    Complete Order
                </span>
                <span
                    className={`success absolute inset-x-0 top-3 text-center font-semibold transition-opacity ${done ? "opacity-100" : "opacity-0"
                        }`}
                >
                    Order Placed
                    <svg viewBox="0 0 12 10" className="inline w-3 h-2 ml-1 stroke-green">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <div className="truck absolute top-[-10px] left-2 w-16 h-7 z-50 opacity-0">
                    <div className="wheel absolute bottom-[-6px] left-[18px] rounded-full w-2 h-2 bg-[#2B3044] border border-gray-400"></div>
                    <div className="back absolute w-12 h-6 bg-[#362A89] rounded-t-sm"></div>
                    <div className="front absolute bottom-[-1px] w-6 h-5 bg-[#A6ACCD]"></div>
                    <div className="box absolute right-[30px] top-[-10px] w-4 h-4 bg-[#ffc400] rounded-sm"></div>
                </div>
            </button>
        </div>
    );
}
