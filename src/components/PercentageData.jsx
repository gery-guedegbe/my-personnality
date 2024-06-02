import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PercentageData = ({ percentages }) => {
  if (!percentages) {
    return <div>No data available</div>;
  }

  const dimensionMap = {
    Extraversion: "E",
    Introversion: "I",
    Sensation: "S",
    Intuition: "N",
    Pensée: "T",
    Sentiment: "F",
    Jugement: "J",
    Perception: "P",
  };

  const labels = Object.keys(percentages).map(
    (dimension) => `${dimension} (${dimensionMap[dimension]})`
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Pourcentages",
        data: Object.values(percentages).map((percentage) =>
          Math.abs(parseFloat(percentage))
        ),
        backgroundColor: [
          "#F00699",
          "#BF1A2F",
          "#454E9E",
          "#018E42",
          "#000000",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
        ],
        hoverBackgroundColor: [
          "#F00699",
          "#BF1A2F",
          "#454E9E",
          "#018E42",
          "#000000",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pourcentages des Dimensions",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-60 md:h-80 mx-auto">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PercentageData;
