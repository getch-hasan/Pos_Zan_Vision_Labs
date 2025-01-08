

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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const YearlyReportChart = () => {
    const data = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Sold Amount',
                data: [0.5, 0.8, -0.3, 0.7, -0.4, 0.6, -0.2, 0.9, -0.6, 0.5, -0.8, 0.4],
                borderColor: '#7c5cc4',
                backgroundColor: '#7c5cc4',
                tension: 0.4
            },
            {
                label: 'Purchased Amount',
                data: [-0.5, -0.7, 0.4, -0.8, 0.5, -0.6, 0.3, -0.9, 0.7, -0.4, 0.6, -0.3],
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
                beginAtZero: false,
                min: -1,
                max: 1,
                title: {
                    display: true,
                    text: 'Values (Range -1 to +1)'
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
        <div className=" inset-0 flex items-center justify-center mt-5">
            <div className="w-full h-[500px]  border border-[#7c5cc4] rounded-lg shadow-lg pb-8">
                <h2 className="text-3xl font-bold text-[#7c5cc4] mb-4 text-center">
                    Yearly Report
                </h2>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default YearlyReportChart;
