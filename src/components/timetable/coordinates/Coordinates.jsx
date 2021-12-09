import React, { memo } from "react";

const getCoordinatesData = () => {
  const dataArr = [];

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const data = {
        x: j * 20,
        y: i * 20,
        id: `${i}${j}`,
        width: 20,
        height: 20,
      };
      dataArr.push(data);
    }
  }

  return dataArr;
};

export const Coordinates = memo(() => {
  const coordinatesData = getCoordinatesData();
  console.log("render coord");
  return (
    <>
      {coordinatesData.map((el, index) => {
        return (
          <rect
            key={index}
            x={el.x}
            y={el.y}
            id={el.id}
            width={el.width}
            height={el.height}
            stroke="#000"
          />
        );
      })}
    </>
  );
});
