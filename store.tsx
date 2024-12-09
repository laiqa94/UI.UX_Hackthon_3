import React from 'react';
import Image from 'next/image';
import { SlidersHorizontal } from 'lucide-react';

const Store = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Main Content Container */}
      <div className="flex justify-center lg:justify-between">
        {/* Left Side - Store Information */}
        <div className="pt-8 px-10">
          <div>
            <h2 className="text-2xl font-semibold my-6">Find a Nike Store</h2>
          </div>

          {/* Search Bar Section */}
          <div className="flex items-center gap-x-4 my-8 pr-4">
            <div className="relative flex items-center">
              <input
                type="text"
                className="store-inp outline-none w-96 text-center py-3 rounded-lg border border-gray-300"
                placeholder="Search Location"
              />
              <svg
                className="absolute left-3 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          <div className="flex justify-between items-center pb-5 px-4">
            <span className="text-gray-500">15 Stores Near You</span>
            <div className="flex items-center gap-x-2">
              <span>Filter</span>
              <SlidersHorizontal className="text-gray-500" />
            </div>
          </div>

          <hr />

          {[{ name: 'Nike NYC - House of Innovation 000', address: '650 5th Ave.' }].map((store, index) => (
            <div key={index} className="my-5">
              <h3 className="font-semibold">{store.name}</h3>
              <p className="text-gray-500">{store.address}</p>
              <hr />
            </div>
          ))}

          <div className="my-7 text-center">
            <a href="#" className="underline text-black font-semibold text-lg">
              View All Stores
            </a>
          </div>
        </div>

        {/* Right Side - Map Image */}
        <div className="mt-2">
          <Image
            className="hidden lg:block"
            src="/stores.png"
            alt="Map displaying store locations"
            width={900}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Store;

