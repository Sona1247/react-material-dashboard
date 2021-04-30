import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import firstChartIcon from "../images/firstChartIcon.png";
import secondChartIcon from "../images/secondChartIcon.png";
import thirdChartIcon from "../images/thirdChartIcon.png";
import fourthChartIcon from "../images/fourthChartIcon.png";
import firstDirection from "../images/grayIcon.png";
import secondDirection from "../images/blueIcon.png";
import "../styles/Donut.scss";
const Donut = () => {
  const [options] = useState({
    series: [63, 22, 15],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      plotOptions: {
        pie: {
          donut: {
            size: 85,
          },
        },
      },
      colors: ["#1070CA", "#EC4C47", "#F7D154"],
      stroke: {
        colors: ["#1070CA", "#EC4C47", "#F7D154"],
        width: 1,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  });
  const chartList = [
    {
      image: secondChartIcon,
      title: "Desktop",
      value: "63%",
    },
    {
      image: thirdChartIcon,
      title: "Tablet",
      value: "15%",
    },
    {
      image: fourthChartIcon,
      title: "Mobile",
      value: "22%",
    },
  ];

  return (
    <div className="chart-all-content">
      <div className="chart-header">
        <h4 className="chart-header-title">Users by device</h4>
        <img className="chart-header-icon" src={firstChartIcon} alt="" />
      </div>
      <div className="chartText">
        <div id="chart">
          <ReactApexChart
            options={options.options}
            series={options.series}
            type="donut"
          />
        </div>

        <div className="chart-content-container">
          {chartList.map((item, key) => (
            <div key={key} className="chart-content">
              <img src={item.image} alt="chart-icon" />
              <p className="chart-title">{item.title}</p>
              <h3
                className="chart-value"
                key={key}
                style={
                  key === 0
                    ? { color: "#1070CA" }
                    : key === 1
                    ? { color: "#F7D154" }
                    : key === 2
                    ? { color: "#EC4C47" }
                    : {}
                }
              >
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-last-side">
        <div className="first-side">
          <p>Last 7 days</p>
          <img className="first-side-direction" src={firstDirection} alt="" />
        </div>
        <div className="second-side">
          <p>Audience Devices</p>
          <img className="second-side-direction" src={secondDirection} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Donut;
