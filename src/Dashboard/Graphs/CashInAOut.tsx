import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../App.css'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
    scales: {
      x:{
        grid:{
            display: true, // Show grid lines for the X-axis
        }
        
        },
        y: {
            grid:{

            },
            ticks:{
            display:false, //hide ticks(lables) for y axis

        }
      },

    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        }
    }, title: {
        display: true,
        text: 'Chart.js Line Chart',
    }
  };

const labels = ['July 12', '19', '26', 'Sep 2','4','9', '15', '30'];

export const data = {
  labels,
  datasets: [
    {
      label: 'income',
      data: [15 ,9, 20, 99, 87, 87, 88, 90],
      borderColor: '#FCBC1B',
      pointStyle: false as any,
      borderWidth:1


    },
    {
      label: 'expenses',
      data:  [0, 30, 50, 90,98, 89, 99, 100],
      borderColor: '#463C3C',
      pointStyle: false as any, 
      borderWidth:1

    },
  ],
};

function CashInOut() {
  return <Line options={options} data={data} className='cash-in-out-graph'/>;
}
export default CashInOut
