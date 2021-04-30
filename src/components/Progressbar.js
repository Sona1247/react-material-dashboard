import React, { useState } from "react";
import  ReactApexChart  from "react-apexcharts";

const Progressbar = () => {
  const [options] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      legend:{
        show :false,
      },
      grid:{
        strokeDashArray:2,
      },
      chart: {
        type: "bar",
        height: 350,
        zoom:{
          enabled:false,
        },
        toolbar: {
          tools:{
            download:false,
          }
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
      
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Progressbar;
