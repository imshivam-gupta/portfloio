"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Carousel, IconButton} from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const Carousel2 = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});


type ProjectProps = (typeof projectsData)[number];


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  

  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  const autoMoveToNextSlide = () => {
    // Calculate the index of the next slide
    const nextSlideIndex = (state.goToSlide + 1) % slides.length;
    setState({ goToSlide: nextSlideIndex });
  };


  useEffect(() => {
    // Automatically move to the next slide every 3000 milliseconds (3 seconds)
    const intervalId = setInterval(autoMoveToNextSlide, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [state.goToSlide]);

  let slides = [
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/801/?random" alt="1" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });


  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };


  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 h-[50vh] w-full">
      <SectionHeading>My Work</SectionHeading>

      <div
        style={{  margin: "0 auto" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="w-full h-full"
      >
          <Carousel2
              slides={slides}
              goToSlide={state.goToSlide}
              offsetRadius={state.offsetRadius}
              showNavigation={state.showNavigation}
              animationConfig={state.config}
            />
      </div>

      <div className="flex justify-center text-xl font-bold"> See my collection </div>

    </section>
  );
}
