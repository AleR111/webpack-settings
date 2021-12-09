import React, { useCallback, useEffect } from "react";
import * as d3 from "d3";

const getCoordinatesData = () => {
  const dataArr = [];

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const data = { x: j * 20, y: i * 20, id: `${i}${j}`, width: 20, height: 20 };
      dataArr.push(data);
    }
  }

  return dataArr;
};

export const Timetable = () => {
  const coordinatesData = getCoordinatesData();

  const renderCoordinates = useCallback(() => {
    const zoomed = ({ transform }) => {
      d3.select("#coordinates")
        .attr("transform", transform)
        .attr("stroke-width", 0.1 / transform.k);
    };

    const zoom = d3.zoom().scaleExtent([1, 200]).on("zoom", zoomed);
    const svg = d3.select("#timetable");
    svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
  }, []);

  useEffect(() => {
    renderCoordinates();
  }, [renderCoordinates]);

  return (
    <div id="box">
      <svg id="timetable" width="100%" height="100vh">
        <g id="coordinates" fill="#ece62473">
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
                onClick={(e) => console.log(e.target.id)}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
