import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const beneficios = [30, 30, 30];
const meses = ["Eso", "es", "aqui"];

const mioptions = {
  responsive: true,
  animation: true,
  plugins: {
    display: false,
  },
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: { color: "rgb(0, 250, 159)" },
    },
  },
};

const midata = {
  labels: meses,
  datasets: [{ label: "Que es", data: beneficios, backgroundColor: "rgb(0, 195, 230, 159)" }],
};

export default function BarChar() {
  return <Bar data={midata} options={mioptions} />;
}
