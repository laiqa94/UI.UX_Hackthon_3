import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "../co";

const Gear = () => {
  return (
    <div className="mt-20 mb-7">
      {/* Header */}
      <div>
        <span className="text-xl font-semibold px-10 lg:px-16">Gear Up</span>
      </div>

      {/* Main Content Section */}
      <div className="flex justify-between px-10 lg:px-20 flex-wrap">
        {/* Men's Gear */}
        <div className="flex gap-x-4 items-center">
          {/* Product 1 */}
          <div>
            <Image
              src="/gear-m-1.png"
              alt="Men's Running Top"
              width={280}
              height={250}
            />
            <div className="flex justify-between items-center px-2 pt-2">
              <div className="text-xs font-bold">Nike Dri-FIT ADV TechKnit Ultra</div>
              <div className="text-sm">₹ 3,895</div>
            </div>
            <div className="px-2 text-sm text-gray-700">
              <span>{`Men's`} Short-Sleeve Running Top</span>
            </div>
          </div>

          {/* Product 2 */}
          <div>
            <div className="flex items-center justify-end pr-10 mb-2">
              <span className="text-xs sm:text-sm">Shop {`Men's`}</span>
              <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-1 md:mx-3">
                <ChevronLeft />
              </div>
              <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
                <ChevronRight />
              </div>
            </div>
            <Image
              src="/gear-man-2.png"
              alt="Men's Shorts"
              width={280}
              height={250}
            />
            <div className="flex justify-between items-center px-2 pt-2">
              <div className="text-xs font-bold">Nike Dri-FIT Challenger</div>
              <div className="text-sm">₹ 3,895</div>
            </div>
            <div className="px-2 text-sm text-gray-700">
              <span>{`Men's`} 18cm (approx.) 2-in-1 Versatile Shorts</span>
            </div>
          </div>
        </div>

        {/* Women's Gear */}
        <div className="flex gap-x-4">
          {/* Product 1 */}
          <div>
            <Image
              src="/gear-w-1.png"
              alt="Women's Running Top"
              width={280}
              height={250}
            />
            <div className="flex justify-between items-center px-2 pt-2">
              <div className="text-xs font-bold">Nike Dri-FIT ADV Run Division</div>
              <div className="text-sm">₹ 2,495</div>
            </div>
            <div className="px-2 text-sm text-gray-700">
              <span>{`Women's`} Long-Sleeve Running Top</span>
            </div>
          </div>

          {/* Product 2 */}
          <div>
            <div className="flex items-center justify-end pr-10 mb-2">
              <span className="text-xs sm:text-sm">Shop {`Women's`}</span>
              <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-1 md:mx-3">
                <ChevronLeft />
              </div>
              <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
                <ChevronRight />
              </div>
            </div>
            <Image
              src="/gear-w-2.png"
              alt="Women's Leggings"
              width={280}
              height={250}
            />
            <div className="flex justify-between items-center px-2 pt-2">
              <div className="text-sm font-bold">Nike Fast</div>
              <div className="text-sm">₹ 3,795</div>
            </div>
            <div className="px-2 text-sm text-gray-700">
              <span>{`Women's`} Mid-Rise 7/8 Running Leggings with Pockets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;
