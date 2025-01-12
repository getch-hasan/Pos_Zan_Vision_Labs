import { FaUsers } from "react-icons/fa";
import LineChart from "./Components/LineChart";
import YearlyReportChart from "./Components/YearlyReportChart";
import InformationMonths from "./Components/InformationMonths";
import BestSellerTable from "./Components/BestSellerTable";
import BestSellerQty from "./Components/BestSellerQty";
import BestSellerPrice from "./Components/BestSellerPrice";
import ProductTableWithTabs from "./Components/ProductTableWithTabs";

export const Dashboard = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <p className="text-[#7c5cc4] text-xl">Welcome ADMIN</p>
        </div>
        <div>
          {/* <select defaultValue="Pick a font" className="select select-ghost mr-2 w-28 md:w-32 lg:w-36 text-[#7c5cc4]">
            <option disabled={true}>Pick a font</option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </select> */}
          <select
            defaultValue="Pick a font"
            className="select border border-[#7c5cc4] text-[#7c5cc4] focus:outline-none focus:ring-2 focus:ring-[#7c5cc4]  transition-all duration-300 mr-2 w-28 md:w-32 lg:w-36">
            <option disabled={true}>Pick a font</option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </select>


          <span className="space-x-1 space-y-1 ">
            <button className="border p-2 border-[#7c5cc4] text-[#7c5cc4]  hover:border-gray-500 transition-all duration-300">
              Today
            </button>
            <button className="border p-2 border-[#7c5cc4] text-[#7c5cc4]  hover:border-gray-500 transition-all duration-300">
              Last 7 Days
            </button>
            <button className="border p-2 border-[#7c5cc4] text-[#7c5cc4]  hover:border-gray-500 transition-all duration-300">
              This Month
            </button>
            <button className="border p-2 border-[#7c5cc4] text-[#7c5cc4]  hover:border-gray-500 transition-all duration-300">
              This Year
            </button>
          </span>


        </div>
      </div>
      {/* dashboard card */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:mr-48 flex-wrap gap-2 mt-5">
        <div className="flex items-center justify-evenly border border-[#7c5cc4] rounded-lg p-4 w-full  shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#7c5cc4]/10">
          {/* Icon Section */}
          <div className="p-3 bg-[#7c5cc4]/20 rounded-full">
            <FaUsers className="text-[#7c5cc4] text-3xl" />
          </div>

          {/* Number and Title Section */}
          <div className="text-right">
            <h3 className="text-2xl font-bold text-[#7c5cc4]">150</h3>
            <p className="text-lg text-[#7c5cc4]">Total Users</p>
          </div>
        </div>
        <div className="flex items-center justify-evenly border border-[#7c5cc4] rounded-lg p-4 w-full  shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#7c5cc4]/10">
          {/* Icon Section */}
          <div className="p-3 bg-[#7c5cc4]/20 rounded-full">
            <FaUsers className="text-[#7c5cc4] text-3xl" />
          </div>

          {/* Number and Title Section */}
          <div className="text-right">
            <h3 className="text-2xl font-bold text-[#7c5cc4]">150</h3>
            <p className="text-lg text-[#7c5cc4]">Total Users</p>
          </div>
        </div>
        <div className="flex items-center justify-evenly border border-[#7c5cc4] rounded-lg p-4 w-full  shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#7c5cc4]/10">
          {/* Icon Section */}
          <div className="p-3 bg-[#7c5cc4]/20 rounded-full">
            <FaUsers className="text-[#7c5cc4] text-3xl" />
          </div>

          {/* Number and Title Section */}
          <div className="text-right">
            <h3 className="text-2xl font-bold text-[#7c5cc4]">150</h3>
            <p className="text-lg text-[#7c5cc4]">Total Users</p>
          </div>
        </div>
        <div className="flex items-center justify-evenly border border-[#7c5cc4] rounded-lg p-4 w-full  shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#7c5cc4]/10">
          {/* Icon Section */}
          <div className="p-3 bg-[#7c5cc4]/20 rounded-full">
            <FaUsers className="text-[#7c5cc4] text-3xl" />
          </div>

          {/* Number and Title Section */}
          <div className="text-right">
            <h3 className="text-2xl font-bold text-[#7c5cc4]">150</h3>
            <p className="text-lg text-[#7c5cc4]">Total Users</p>
          </div>
        </div>
      </div>
      {/* cash flow chart */}
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-5 ">
        <div className="col-span-3">
          <LineChart></LineChart>
        </div>
        <div className="col-span-2">
          <InformationMonths />
        </div>
      </div>
      {/* yearly report chart */}
      <div>
        <YearlyReportChart></YearlyReportChart>
      </div>
      {/* transaction table */}
      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-5">
            <div className="col-span-4">
           <ProductTableWithTabs></ProductTableWithTabs>
            </div>
            <div className="col-span-3">
            <BestSellerTable></BestSellerTable>
            </div>
      </div>
      {/* best seller */}
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-3">
        <div className="col-span-4">
            <BestSellerQty></BestSellerQty>
        </div>
        <div className="col-span-4">
            <BestSellerPrice></BestSellerPrice>
        </div>
      </div>
      {/* footer */}
      <div className="m-10 text-center">
      <p>Point of sale | Zan Vision Labs</p>
      </div>

    </>
  );
};
