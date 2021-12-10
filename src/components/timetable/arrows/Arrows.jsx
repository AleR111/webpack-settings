import React, { memo } from "react";

export const Arrows = memo(({ coordinatesData }) => {
  console.log(coordinatesData);
  console.log("render arrow");
  return (
    <g id="arrows">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="8.5"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
      </defs>
      <g id="arrows-line">
        {coordinatesData.map((el, index) => {
          return (
            <line
              key={index}
              x1={el.x1}
              y1={el.y1}
              x2={el.x2}
              y2={el.y2}
              stroke="red"
              markerEnd="url(#arrowhead)"
            />
          );
        })}
      </g>
    </g>
  );
});
