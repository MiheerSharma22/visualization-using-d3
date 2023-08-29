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
        "#28c76f",
        "#36cd77",
        "#43d28066",
        "#51d888",
        "#5fde90",
        "#6ce497",
        "#7aeb9f",
        "#88f2a7",
        "#95f9af",
        "#a3ffb7",
        "#b0ffc0",
        "#beffc8",
        "#ccffd0",
        "#d9ffd8",
        "#e7ffdf",
        "#f5ffe7",
        "#ffffff",
      ]);

    // Compute the position of each group on the pie:
    const pie = d3.pie().value((d) => d[1]);

    const data_ready = pie(Object.entries(sectorMap));

    // adding label
    svg
      .append("text")
      .attr("class", "label")
      .attr("x", -150)
      .attr("y", 0.55 * height)
      .attr("fill", "#7367f0")
      .text("Number of records under each Sector");

    // adding tooltip
    var tooltip = d3.select("#container2").append("div").style("opacity", 0);

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
      .on("mouseover", (e, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(
          ` <div class="doughnut-tooltip-container">
              <p><span>Sector:</span> ${d.data[0]}</p> 
              <p><span>No. of Records:</span> ${d.data[1]}</p>
            </div>
             `
        );
      })
      .on("mouseout", (d) => {
        tooltip.transition().duration(500).style("opacity", 0);
      })
      .attr("fill", (d) => color(d.data[0]))
      // .attr("stroke", "#d9ffd8")
      // .style("stroke-width", "1px")
      .style("opacity", 0.7);
  }

  return (
    <div className="w-9/12 mx-auto flex flex-col border border-borderColor px-[1.3rem] py-[0.75rem] rounded-lg">
      <p className="text-textColor text-xl font-medium">Doughnut Chart</p>
      <div
        id="container2"
        className="place-self-center flex flex-col-reverse mb-10"
      ></div>
    </div>
  );
};

export default DoughnutPlot;
