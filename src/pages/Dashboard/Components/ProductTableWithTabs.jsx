import React, { useState } from 'react';

const TabbedTable = () => {
  const [activeTab, setActiveTab] = useState('Sale');

  // Dynamic headers and data for each tab
  const tableHeaders = {
    Sale: ['Date', 'Reference', 'Customer', 'Status', 'Grand Total'],
    Purchase: ['Date', 'Supplier', 'Reference', 'Status', 'Total Amount'],
    Quotation: ['Date', 'Quotation ID', 'Client', 'Status', 'Amount'],
    Payment: ['Date', 'Reference', 'Amount', 'Paid By', 'Status']
  };

  const data = {
    Sale: [
      { img: 'https://img.daisyui.com/images/profile/demo/2@94.webp', date: '2024-01-01', reference: 'INV001', customer: 'John Doe', status: 'Completed', total: '$1000' },
      { img: 'https://img.daisyui.com/images/profile/demo/2@94.webp', date: '2024-01-02', reference: 'INV002', customer: 'Jane Doe', status: 'Pending', total: '$500' }
    ],
    Payment: [
      { img: 'https://img.daisyui.com/images/profile/demo/2@94.webp', date: '2024-01-03', reference: 'PAY001', amount: '$1000', paidBy: 'Credit Card', status: 'Completed' },
      { img: 'https://img.daisyui.com/images/profile/demo/2@94.webp', date: '2024-01-04', reference: 'PAY002', amount: '$500', paidBy: 'Bank Transfer', status: 'Pending' }
    ]
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="border border-[#7c5cc4] rounded-lg mt-5 shadow-lg overflow-auto ">

      <div className='flex justify-between px-5 py-3 font-semibold '>
        <h1>{activeTab} Information</h1>
        <button className="bg-[#7c5cc4] px-2 text-white text-xs rounded-md">Top-5</button>
      </div>
      <hr />

      {/* Tab Section */}
      <div className="flex space-x-4 ">
        {Object.keys(tableHeaders).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 rounded-t-lg transition-all duration-300 
                            ${activeTab === tab ? 'text-[#7c5cc4]' : 'text-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <hr />

      {/* Table Section */}
      <div className=" shadow-lg ">


        {/* Table with dynamic headers and data */}
        <table className="table w-full ">
          {/* Dynamic Header */}
          <thead className='text-sm '>
            <tr>
              {tableHeaders[activeTab].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          {/* Dynamic Body */}
          <tbody className=''>
            {data[activeTab]?.map((item, index) =>(
              <tr key={index} className=" ">
                <td>{item.date}</td>
                <td>{item.reference}</td>
                {activeTab === 'Sale' && (
                  <>
                    <td>{item.customer}</td>
                    <td>{item.status}</td>
                    <td>{item.total}</td>
                  </>
                )}
                {activeTab === 'Payment' && (
                  <>
                    <td>{item.amount}</td>
                    <td>{item.paidBy}</td>
                    <td>{item.status}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabbedTable;
