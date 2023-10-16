"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import dynamic from "next/dynamic";
import { useState } from "react";
import { config } from "react-spring";
import { useEffect } from "react";

const Carousel2 = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});


type ProjectProps = (typeof projectsData)[number];

async function getData() {
  let res = await fetch("/api/images", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allImages = await res.json();
  console.log("Fetched");
  console.log("Yipee",allImages);

  return allImages;
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const [images, setImages] = useState([])

  useEffect(()=>{
    getData().then((data)=>{
      setImages(data.data)
    })
  },[])

  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  
  // useEffect(() => {
  //   const intervalId = setInterval(autoMoveToNextSlide, 10000);
  //   return () => clearInterval(intervalId);
  // }, [state.goToSlide]);


  // const autoMoveToNextSlide = () => {
  //   const nextSlideIndex = (state.goToSlide + 1) % slides.length;
  //   setState({ goToSlide: nextSlideIndex });
  // };

  
  let slides = images.map((image, index) => {
    console.log("Image at index", index, image);
    return {
      key: image._id,
      content: <img src={image.imageuri} alt={image.alt} className="w-[700px] !object-cover h-[400px] rounded-sm"/>
    };
  }).map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });


  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches 
    ); 
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
      if (xDiff > 0) {
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } 
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
              goToSlideDelay={10000}
              offsetRadius={state.offsetRadius}
              showNavigation={state.showNavigation}
              animationConfig={state.config}
            />
      </div>

      <div className="flex justify-center text-xl font-bold"> See my collection </div>

    </section>
  );
}


