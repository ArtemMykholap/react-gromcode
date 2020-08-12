import React from "react";
import { useEffect, useState } from "react";


const Dimensions = () => {

  const [demensions, setDemensions] = useState({
    width: null,
    height: null
  })

  const { width, height } = demensions;

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDemensions({
      width: innerWidth,
      height: innerHeight
    });

    const handleResize = (event) => {
      const { innerHeight, innerWidth } = event.target;

      setDemensions({
        width: innerWidth,
        height: innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width, height])
  return (
    <div className='dimensions'>{`${width}px - ${height}px`}</div>
  );

}

export default Dimensions; 