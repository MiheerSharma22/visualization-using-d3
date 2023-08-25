import React, { useEffect } from "react";
import * as d3 from "d3";

const DoughnutPlot = ({ data, width, height }) => {
  const sectorMap = {
    others: 0,
    Healthcare: 0,
    Energy: 0,
    "Information Technology": 0,
    "Aerospace & defence": 0,
    Construction: 0,
    "Financial services": 0,
    "Support services": 0,
    Manufacturing: 0,
    Retail: 0,
    Government: 0,
    Transport: 0,
    "Food & agriculture": 0,
    Environment: 0,
    Automotive: 0,
    Security: 0,
    "Tourism & hospitality": 0,
    Water: 0,
    "Media & entertainment": 0,
  };

  // setting the number data entries of each sector
  for (const d of data) {
    if (d.sector === "") sectorMap.others++;
    else sectorMap[d.sector]++;
  }
  console.log("sectors: ", sectorMap);

  useEffect(() => {
    drawChart();
    //eslint-disable-next-line
  }, [data]);

  function drawChart() {
    // Add logic to draw the chart here
    d3.select("#container2").select("svg").remove();
    d3.select("#container2").select(".tooltip").remove();

    const margin = 40;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3
      .select("#container2")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3
      .scaleOrdinal()
      .range([
        "#00A896",
        "#02C39A",
        "#00B4A0",
        "#3DCCA6",
        "#4CAF50",
        "#43AA8B",
        "#61C0BF",
        "#48BFE3",
        "#6A4C93",
        "#6B4226",
        "#70C1B3",
        "#34A853",
        "#227D51",
        "#1B998B",
        "#83C5BE",
        "#3C493F",
        "#61A6AB",
        "#9A8C98",
        "#5C755E",
      ]);

    // Compute the position of each group on the pie:
    const pie = d3.pie().value((d) => d[1]);

    const data_ready = pie(Object.entries(sectorMap));

    svg
      .selectAll("whatever")
      .data(data_ready)
      .join("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(120) // This is the size of the donut hole
          .outerRadius(radius)
      )
      .attr("fill", (d) => color(d.data[0]))
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);
  }

  return (
    <div className="w-9/12 mx-auto flex flex-col border border-borderColor px-[1.3rem] py-[0.75rem] rounded-lg">
      <p className="text-textColor text-xl font-medium">Doughnut Chart</p>
      <div id="container2" className="place-self-center "></div>
    </div>
  );
};

export default DoughnutPlot;
