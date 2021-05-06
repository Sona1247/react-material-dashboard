import React, { useState } from "react";
import  ReactApexChart  from "react-apexcharts";
import secondDirection from "../images/blueIcon.png";
import "./../styles/ProgressBar.scss";
import progressDirection from "../images/progressDirection.png"
const Progressbar = () => {
  const [options] = useState({
    series: [
      {
        name: "Mobile",
        data: ["17k", "4k", "18k", "27k", "29k", "17k","19k"],
        color: "#1665D8",
      },
      {
        name: "Desktop",
        data: ["10k","18k","14k","28k","26k","22k","13k"],
        color: "#EDF0F2",
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
        height: 400,
       
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
          columnWidth: "27%",
          startingShape:"rounded",
          endingShape: "rounded",
         
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "1 Aug",
          "2 Aug",
          "3 Aug",
          "4 Aug",
          "5 Aug",
          "6 Aug",
          "7 Aug",
        ],
        axisTicks:{
          show:false,
        },
        axisBorder:{
          show:false
        },
        labels:{
          style:{
           colors:"#A6B1BB"
          }
        }
      },
      yaxis: {
        tickAmount: 7,
        min: 0,
        max:35,
        labels:{
          formatter:(value) => {
          return(value) + "k"},
          style:{
            colors:"#A6B1BB"
           }
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "" + val + "k";
          },
        },
      },
    },
  });
  return (
<div className="all-progressbar-content">
<div className="header-side-progressBar">
  <h2>Users by device</h2>
  <div className="header-second-side">
    <p>Last 7 days</p>
    <img src={progressDirection} alt="icon"/>
  </div>
</div>
    <div id="progress-chart">
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="bar"
        height={400}
      />
    </div>
    <div className="last-side-progressBar">
      <h4>Audience Overview</h4>
      <img src={secondDirection} alt="blue-icon"/>
    </div>
</div>
  );
};

export default Progressbar;
