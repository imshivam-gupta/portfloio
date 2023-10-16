"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import dynamic from "next/dynamic";
import { useState } from "react";
import { config } from "react-spring";
import { useEffect } from "react";

interface VideoData {
  _id: string;
  videouri: string;
}



const Carousel = dynamic(() => import("react-spring-3d-carousel") as any, {
  ssr: false,
});



async function getData() {
  let res = await fetch("/api/videos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allVideos = await res.json();

  return allVideos;
}

export default function Videos() {
  const { ref } = useSectionInView("Paintings", 0.5);

  const [images, setImages] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setImages(data.data);
    });
  }, []);

  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });

  // useEffect(() => {
  //   const intervalId = setInterval(autoMoveToNextSlide, 10000);
  //   return () => clearInterval(intervalId);
  // }, [state.goToSlide]);

  // const autoMoveToNextSlide = () => {
  //   const nextSlideIndex = (state.goToSlide + 1) % slides.length;
  //   setState({ goToSlide: nextSlideIndex });
  // };

  
  let slides = images.map((video: VideoData, index) => {
      console.log("video at index", index, video);
      return {
        key: video._id,
        content: (
          <iframe 
            width="700" 
            height="400"
            src={video.videouri}
            className="w-[700px] !object-cover h-[400px] rounded-sm"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        ),
      };
    })
    .map((slide, index) => {
      return { ...slide, onClick: () => setState({...state, goToSlide: index }) };
    });

  let xDown: number | null = null;
  let yDown: number | null = null;

  const getTouches = (evt: React.TouchEvent) => {
    return evt.touches || evt.nativeEvent.touches;
  };

  const handleTouchStart = (evt: React.TouchEvent) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt: React.TouchEvent) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setState({ ...state, goToSlide: state.goToSlide + 1 });
      } else {
        setState({ ...state, goToSlide: state.goToSlide - 1 });
      }
    }
    xDown = null;
    yDown = null;
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 h-[50vh] w-full"
    >
      <SectionHeading>My Work</SectionHeading>

      <div
        style={{ margin: "0 auto" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="w-full h-full"
      >
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          goToSlideDelay={1000}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
      </div>

      <div className="flex justify-center text-xl font-bold">
        {" "}
        See my collection{" "}
      </div>
    </section>
  );
}