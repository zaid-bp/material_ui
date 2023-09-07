import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [],
  datasets: [
      {
          label: '',
          data: [12, 19, 3],
          backgroundColor: [
              '#4AA3A3',
              '#398280',
              '#4AA3A3',
            ],
            borderColor: [
                '#FFFF',
                '#FFFF',
        '#FFFF',
    ],
    borderWidth: 2,
},
  ],
};

export function ExpensesBarG() {
  return <Pie data={data} />;
}