import React from "react";
import "./page.styles.css";

export default function page() {
  const imageObjects = [
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=0",
      className: "card span-1 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=1",
      className: "card span-1 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=2",
      className: "card span-1 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=3",
      className: "card span-1 c-5 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=4",
      className: "card span-2 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=5",
      className: "card span-1 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=6",
      className: "card span-2 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=7",
      className: "card span-2 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=8",
      className: "card span-2 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=9",
      className: "card span-1 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=10",
      className: "card span-1 c-5 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=11",
      className: "card span-2 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=12",
      className: "card span-1 c-2 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=13",
      className: "card span-1 c-5 cursor-pointer",
    },
    {
      url: "https://unsplash.it/600/600/?random&amp;amp;time=14",
      className: "card span-3 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=15",
      className: "card span-2 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=16",
      className: "card span-2 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=17",
      className: "card span-2 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=18",
      className: "card span-1 c-5 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=19",
      className: "card span-2 c-2 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=20",
      className: "card span-1 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=21",
      className: "card span-2 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/600/600/?random&amp;amp;time=22",
      className: "card span-3 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=23",
      className: "card span-1 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=24",
      className: "card span-2 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=25",
      className: "card span-2 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=26",
      className: "card span-1 c-5 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=27",
      className: "card span-1 c-5 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=28",
      className: "card span-1 c-2 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=29",
      className: "card span-1 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=30",
      className: "card span-1 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=31",
      className: "card span-1 c-3 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=32",
      className: "card span-1 c-2 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=33",
      className: "card span-1 c-5 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=34",
      className: "card span-2 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=35",
      className: "card span-1 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/400/400/?random&amp;amp;time=36",
      className: "card span-2 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=37",
      className: "card span-1 c-1 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=38",
      className: "card span-1 c-4 cursor-pointer",
    },
    {
      url: "https://unsplash.it/200/200/?random&amp;amp;time=39",
      className: "card span-1 c-2 cursor-pointer",
    },
  ];

  return (
    <div className="grid w-full bg-black px-5">
      {imageObjects.map((imageUrl, index) => (
        <ImageCard key={index} imageUrl={imageUrl.url} c={imageUrl.className} />
      ))}
    </div>
  );
}

function ImageCard({ imageUrl, c }) {
  return (
    <div className={c} style={{ backgroundImage: `url(${imageUrl})` }}></div>
  );
}
