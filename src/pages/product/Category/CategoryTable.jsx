import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CategoryTable = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  const tableData = [
    {
        id: 1,
        category: 'Electronics',
        parentCategory: 'Gadgets',
        numberOfProducts: 100,
        stockQuantity: 500,
        stockWorth: 'USD 5000',
        image: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
    },
    {
        id: 2,
        category: 'Clothing',
        parentCategory: 'Fashion',
        numberOfProducts: 200,
        stockQuantity: 1000,
        stockWorth: 'USD 10000',
        image: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
    }
];



  return (
    <div className="overflow-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Category</th>
            <th>Parent Category</th>
            <th>Number Of Product</th>
            <th>Stock Quantity</th>
            <th>Stock Worth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="rounded-md h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>
              N/A
            </td>
            <td>000</td>

            <td>000</td>

            <td>USD 0/USD</td>

            <td>

              <div className='relative inline-block'>
                <button onClick={toggleBox} className="flex items-center border border-[#7c5cc4] text-[#7c5cc4] rounded-r-m  px-2 py-1 lg:px-4 lg:py-2 ">
                  Action
                  <IoMdArrowDropdown className="w-5 h-5" />
                </button>

                {isOpen && (
                  <div className="absolute top-[30px] mt-2  right-0  p-4  border border-gray-300 shadow-lg rounded-md space-y-1">

                    <button                    
                      className="bg-white text-[#7c5cc4] px-4 py-2 border w-24  rounded-md flex items-center gap-2"
                    >
                      <FaRegEdit />
                      Edit
                    </button>
                    <button                    
                      className="bg-white text-[#7c5cc4] px-4 py-2 border w-24  rounded-md flex items-center gap-2"
                    >
                      <MdOutlineDeleteOutline />
                      Delete
                    </button>

                  </div>
                )}
              </div>
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default CategoryTable;