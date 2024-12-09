import React from "react";
import Link from "next/link";
import SheetContent from '../component/ui/sheet'; // Ensure path matches
import {Sheet,  SheetDescription, SheetHeader, SheetTrigger} from "../component/ui/sheet"
import { FaAlignJustify } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-100 flex justify-between items-center py-2 px-10 lg:px-16 xl:px-20">
        {/* Logo Section */}
        <div className="flex justify-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG content here */}
          </svg>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex gap-x-3 text-sm">
          <Link href="/store">
            <span className="header-border text-black">Find a Store</span>
          </Link>
          <Link href="/help">
            <span className="header-border text-black">Help</span>
          </Link>
          <Link href="/join">
            <span className="header-border text-black">Join Us</span>
          </Link>
          <Link href="/signUp">
            <span className="text-black p-4">Sign In</span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
  <SheetTrigger className="lg:hidden">
    <FaAlignJustify />
  </SheetTrigger>
  <SheetContent className="h-[500px] rounded-2xl mx-auto mt-8">
    <SheetHeader>
      <SheetDescription>
        <ul className="res-ul text-black text-lg py-7">
          <Link href="/store">
            <li>Find a Store</li>
          </Link>
          <Link href="/help">
            <li>Help</li>
          </Link>
          <Link href="/join">
            <li>Join Us</li>
          </Link>
          <Link href="/signUp">
            <li>Sign In</li>
          </Link>
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 lg:px-14 xl:px-16 py-2">
        {/* Logo */}
        <div>
          <Link href="/">
            <svg
              width="79"
              height="69"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG content here */}
            </svg>
          </Link>
        </div>

        {/* Tabs (Desktop) */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-x-5 text-sm">
            <li>New & Featured</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
          </ul>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center gap-x-4">
          {/* Search Bar */}
          <div className="flex items-center relative">
            <input
              className="hidden lg:flex bg-gray-100 outline-none w-44 text-center px-3 py-2 rounded-full"
              type="text"
              placeholder="Search"
            />
            <svg
              className="absolute lg:pl-3 hover:opacity-55"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Search Icon SVG */}
            </svg>
          </div>

          {/* Icons Section */}
          <div className="flex gap-x-2">
            {/* Wishlist Icon */}
            <div>
              <svg
                className="hover:opacity-55"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Wishlist Icon SVG */}
              </svg>
            </div>

            {/* Cart Icon */}
            <div>
              <svg
                className="hover:opacity-55"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Cart Icon SVG */}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
