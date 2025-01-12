import React from 'react';

const BestSellerPrice = () => {
  return (
    <div>
      <div className="overflow-x-auto border border-[#7c5cc4] rounded-lg shadow-lg mt-5">

        <div className='flex justify-between px-5 py-3 font-semibold'>
          <div>
            <h1>Best Seller January</h1>
          </div>
          <button className="bg-[#7c5cc4] px-2 text-white text-xs rounded-md">Top-5</button>
        </div>
        <hr />
        <table className="table">
          {/* head */}

          <thead className='text-sm'>
            <tr>
              <th>Product Details</th>
              <th> Qty</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className=" h-[25px] w-[30px] rounded-sm">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="">Zenbook 14 OLED (UX3402)｜Laptops For Home – ASUS [59028109] Zenbook 14 OLED (UX3402)｜Laptops For Home – ASUS</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                1
              </td>

            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className=" h-[25px] w-[30px] rounded-sm">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="">Zenbook 14 OLED (UX3402)｜Laptops For Home – ASUS [59028109]</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                1
              </td>

            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className=" h-[25px] w-[30px] rounded-sm">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="">Zenbook 14 OLED (UX3402)｜Laptops For Home – ASUS [59028109]</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                1
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default BestSellerPrice;