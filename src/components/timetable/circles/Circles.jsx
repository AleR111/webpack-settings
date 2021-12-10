import React, { memo, useEffect, useState } from "react";

export const Circles = memo(({ startPoint }) => {
  const [coordinates, setCoordinates] = useState([]);
  console.log("render circles");

  useEffect(() => {
    if (startPoint) {
      setCoordinates((state) => {
        return [...state, startPoint];
      });
    }
  }, [startPoint]);

  return (
    <g id="circles" fill="none" stroke="red">
      {coordinates.map((el, index) => {
        return <circle key={index} cx={el.x} cy={el.y} r="5" />;
      })}
    </g>
  );
});
