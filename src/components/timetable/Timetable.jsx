import React, { useCallback, useEffect, useRef } from "react";
import * as d3 from "d3";

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

export const Timetable = () => {
const startPoint = useRef(null)


  const coordinatesData = getCoordinatesData();

  const renderCoordinates = useCallback(() => {
    const zoomed = ({ transform }) => {
      d3.select("#zoom-box")
        .attr("transform", transform)
        .attr("stroke-width", 0.1 / transform.k);
      d3.select("#arrows-line").attr("stroke-width", 2 / transform.k);
    };

    const zoom = d3.zoom().scaleExtent([1, 200]).on("zoom", zoomed);
    const svg = d3.select("#timetable");
    svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
  }, []);

  console.log('render');

  const addArrow = ({x, y}) => {

  }

  const handler = (e) => {
    const cell = e.target;
    startPoint.current = {
      x: cell.getAttribute('x'),
      y: cell.getAttribute('y')
    }
    
  };

  useEffect(() => {
    renderCoordinates();
  }, [renderCoordinates]);

  return (
    <div id="box">
      <svg id="timetable" width="100%" height="100vh">
        <g id="zoom-box">
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
                  onClick={(e) => handler(e)}
                />
              );
            })}
          </g>
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
              {/* <line
              x1="100"
              y1="5"
              x2="100"
              y2="500"
              stroke="red"
              marker-end="url(#arrowhead)"
            /> */}
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
