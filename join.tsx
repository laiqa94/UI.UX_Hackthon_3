import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Join = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Header Image */}
      <div className="flex justify-center mb-6">
        <Image 
          src="/join.png" 
          alt="Shoes Banner" 
          width={450} 
          height={200} 
          className="rounded-md"
        />
      </div>

      {/* Form Section */}
      <div className="flex justify-center">
        <form className="w-full max-w-lg space-y-4 bg-white shadow-md rounded-lg p-6">
          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Password Input */}
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Name Inputs */}
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-1/2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-1/2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Date of Birth Input */}
          <input 
            type="date" 
            className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          {/* Country Selector */}
          <div className="relative">
            <select 
              className="w-full border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
            <ChevronDown className="absolute top-3 right-4 text-gray-500" />
          </div>

          {/* Gender Selection */}
          <div className="flex justify-between">
            <label className="w-1/2 flex items-center space-x-2">
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                className="focus:ring-black" 
                required 
              />
              <span>Male</span>
            </label>
            <label className="w-1/2 flex items-center space-x-2">
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                className="focus:ring-black" 
                required 
              />
              <span>Female</span>
            </label>
          </div>

          {/* Email Subscription */}
          <label className="flex items-start space-x-2 text-gray-600">
            <input 
              type="checkbox" 
              className="mt-1 focus:ring-black"
            />
            <span>
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </span>
          </label>

          {/* Terms and Conditions */}
          <p className="text-sm text-center text-gray-600">
            By creating an account, you agree to Nike's{' '}
            <Link href="/privacy-policy">
              <a className="underline">Privacy Policy</a>
            </Link>{' '}
            and{' '}
            <Link href="/terms-of-use">
              <a className="underline">Terms of Use</a>
            </Link>.
          </p>

          {/* Join Button */}
          <button 
            type="submit" 
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Join Us
          </button>

          {/* Already a Member */}
          <div className="text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link href="/signUp">
              <a className="text-black underline">Sign In</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
