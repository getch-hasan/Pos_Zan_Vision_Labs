
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const InformationMonths = () => {
    const data = {
        labels: ['Purchase', 'Revenue', 'Expense'],
        datasets: [
            {
                label: 'Amount (Taka)',
                data: [30000, 50000, 20000], // Values for Purchase, Revenue, Expense
                backgroundColor: [
                    '#34a853', // Purchase (Green)
                    '#7c5cc4', // Revenue (Purple)
                    '#ea4335'  // Expense (Red)
                ],
                hoverOffset: 4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    };

    return (
        <div className="flex justify-center items-center text-center bg-white mt-5 mx-auto">
            <div className="w-full lg:w-[80%]   border border-[#7c5cc4] rounded-lg shadow-lg p-4">
                <h2 className="text-2xl font-bold text-[#7c5cc4] mb-4 text-center">
                    Purchase, Revenue & Expense
                </h2>
                
                    <Pie data={data} options={options} />
                
            </div>
        </div>
    );
};

export default InformationMonths;
