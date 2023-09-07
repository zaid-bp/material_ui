import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import '../../App.css'

export const options = {
  responsive: true,
  scales:{
    y:{
        ticks:{
            display:false
        }
    },
    x:{
        grid:{
            display:false
        }
    }

  },
  plugins: {
    legend: {
        display:false
    },

  }
};

const labels = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: [0, 31, 1, 2, 0, 0, 0],
      borderColor: "#6AB32F",
      borderWidth:3,
      backgroundColor: "#6AB32F"
    }
  ]
};

function SalesG() {
  return <Line options={options} data={data} className="sale-graph"/>;
}
export default SalesG