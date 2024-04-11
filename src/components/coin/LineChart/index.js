import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumber } from "../../../functions/convertNumber.js";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales:{
      y: {
        ticks: {
          callback: function(value, index, ticks){
            if(priceType=="prices") return "₹" + value;
            else{
              return "₹" + convertNumber(value);
            }
          },
        },
      },
    },
    // scales: {
    //   crypto1: {
    //     position: "left",
    //   },
    //   crypto2: multiAxis && {
    //     position: "right",
    //   },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;