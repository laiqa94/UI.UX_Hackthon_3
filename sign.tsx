import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignIn = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Header Image */}
      <div className="flex justify-center mb-8">
        <Image 
          src="/signIn.png" 
          alt="Sign In Banner" 
          width={450} 
          height={200} 
          className="rounded-md shadow-md"
        />
      </div>

      {/* Sign-In Form */}
      <div className="flex justify-center">
        <form className="w-full max-w-lg space-y-6">
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

          {/* Options: Keep Signed In and Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="focus:ring-black"
              />
              <span>Keep me signed in</span>
            </label>
            <Link href="/forgot-password">
              <a className="underline">Forgot your password?</a>
            </Link>
          </div>

          {/* Agreement Text */}
          <p className="text-sm text-center text-gray-600">
            By logging in, you agree to{' '}
            <Link href="/privacy-policy">
              <a className="underline text-gray-500">Nike's Privacy Policy</a>
            </Link>{' '}
            and{' '}
            <Link href="/terms-of-use">
              <a className="underline text-gray-500">Terms of Use</a>
            </Link>.
          </p>

          {/* Sign In Button */}
          <button 
            type="submit" 
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Join Link */}
      <div className="mt-6 text-center text-sm text-gray-500">
        Not a member?{' '}
        <Link href="/join">
          <a className="text-black underline">Join Us</a>
        </Link>.
      </div>
    </div>
  );
};

export default SignIn;
