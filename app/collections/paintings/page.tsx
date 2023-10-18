"use client";
import React, { useEffect, useState } from "react";
import "./page.styles.css";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function page() {
  const [images, setImages] = useState([]);
  const [imageObjects, setImageObjects] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [activeImageURL, setActiveImageURL] = useState("");
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    async function getData() {
      let res = await fetch("/api/images", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let allImages = await res.json();
      // console.log("Fetched");
      // console.log("Yipee", allImages);
      return allImages;
    }

    getData().then((data) => {
      setImages(data.data);
      // console.log(data.data);
      const imageresp = data.data;
      let temp = [];
      imageresp.forEach((image, index) => {
        temp.push({
          url: image.imageuri,
          className: "card span-2 c-2 cursor-pointer",
        });
      });
      // temp=[...temp,...temp,...temp]
      setImageObjects(temp);
    });
  }, []);

  console.log(open);

  function ImageCard({ imageUrl, handleOpen, c }) {
    return (
      <div
        className={c}
        onClick={() => {
          setActiveImageURL(imageUrl);
          console.log(imageUrl);
          handleOpen();
        }}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    );
  }

  return (
    <div>
      <div className="grid w-full px-5 pb-10 min-h-[70vh] place-content-center-center">
        {imageObjects.map((imageUrl, index) => (
          <ImageCard
            key={index}
            imageUrl={imageUrl.url}
            c={imageUrl.className}
            handleOpen={handleOpen}
          />
        ))}
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        // size={"xl"}
        className="fixed top-0 bottom-0 left-0 right-0 m-auto w-[50%] h-[60%] "
      >
        <DialogHeader className="w-full h-13">
          <Button
            variant="text"
            color="black"
            onClick={handleOpen}
            className="mr-4 ml-auto"
          >
            <XMarkIcon strokeWidth={2} className="w-6 h-6 text-black text-lg" />
          </Button>
        </DialogHeader>
        <DialogBody className="h-full bg-white ">
          <img
            src={activeImageURL}
            className="h-full mx-auto object-contain "
          />
        </DialogBody>
      </Dialog>
    </div>
  );
}
