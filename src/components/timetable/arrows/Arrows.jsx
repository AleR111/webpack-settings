import React from "react";

export const Arrows = () => {
  return (
    <g id="arrows">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
      </defs>
      <g id="arrows-line">
        <line
          x1="100"
          y1="5"
          x2="100"
          y2="500"
          stroke="red"
          markerEnd="url(#arrowhead)"
        />
      </g>
    </g>
  );
};
