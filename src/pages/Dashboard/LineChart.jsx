import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Chart.js components register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Income (Taka)',
                data: [5000, 7000, 8000, 6000, 9000, 10000],
                borderColor: '#7c5cc4',
                backgroundColor: '#7c5cc4',
                tension: 0.4
            },
            {
                label: 'Monthly Transactions',
                data: [20, 30, 25, 35, 40, 50],
                borderColor: '#34a853',
                backgroundColor: '#34a853',
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Values'
                }
            },
            x: {
                title: {
                    display: true,
                    text: ''
                }
            }
        }
    };

    return (
        <div className=" p-6 border border-[#7c5cc4] rounded-lg shadow-lg w-full h-[400px] md:h-[550px] mx-auto mt-5 pb-5">
            <h2 className="text-2xl font-bold text-[#7c5cc4] ">Cash Flow</h2>
           
            <Line data={data} options={options}   />
           
        </div>
    );
}

export default LineChart;
