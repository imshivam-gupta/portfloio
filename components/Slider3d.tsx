import React, { useEffect, useState } from 'react';
import './Carousel.css'; // Import your CSS file

const Slider3d = ({slides,classNameaddnl}) => {
    
    const len = slides?.length || 4;
    const xfac = 360/len;
    const curdeg = 250;
    const [currdeg, setCurrdeg] = useState(0);

    const rotate = (direction) => {
        let newDeg = currdeg;
    
        if (direction === 'n') {
          newDeg += xfac;
        } else if (direction === 'p') {
          newDeg -= xfac;
        }
    
        setCurrdeg(newDeg);
      };
    

    useEffect(() => {
        console.log("currdeg",currdeg);
        const intervalId = setInterval(() => {
          rotate('n');
        }, 4000);
        return () => clearInterval(intervalId);
    }, [currdeg]);

  


//   const slides = []
//   for (let i = 0; i < 6; i += 1) {
//     slides.push(i);
//   }

 

  console.log("Slides", slides);
//   Doubling the slides array

  return (
    <div className={`crslown ${classNameaddnl}`}>
    <div className="container">

    <div className="carousel" style={{
        WebkitTransform: `rotateY(-${currdeg}deg)`,
        MozTransformOrigin: `rotateY(-${currdeg}deg)`,
        OTransform: `rotateY(-${currdeg}deg)`,
        transform: `rotateY(-${currdeg}deg)`
      }}>

    {slides.map((currElement,index) => 
      
      {
  
        return (
            <div 
            className="a"
            style={{transform: index!==0?`${`rotateY(${((index*xfac))%360}deg) ${`translateZ(250px)`} rotateY(-${((index*xfac))%360}deg)`}` : `${`rotateY(${0}deg) translateZ(${curdeg}px)`}`
            }}
            key = {index}
            >
        
        <div className="item"
          style={{
            WebkitTransform: `rotateY(${ (currdeg%360)}deg)`,
            MozTransform: `rotateY(${ (currdeg%360)}deg)`,
            OTransform: `rotateY(${ (currdeg%360)}deg)`,
            transform: `rotateY(${ (currdeg%360)}deg)`
          }}
        >{currElement}</div>
      </div>)
  })}

     
      </div>
      {/* <div className="next" onClick={() => rotate('n')}>
        Next
      </div>
      <div className="prev" onClick={() => rotate('p')}>
        Prev
      </div> */}
    </div>
    </div>
  );
};

export default Slider3d;