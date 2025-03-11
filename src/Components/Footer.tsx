import React from 'react';
import LoveriviLogo from '../assets/Loverivi.png'; // Adjust the path as necessary
import FbLogo from '../assets/Fb_logo.png';
import EmailLogo from '../assets/email.png';
import IGLogo from '../assets/IG_Logo.png';
import CallLogo from '../assets/call.png';
import '../App.css'; 

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      {/* Checkerboard Pink Background */}
      <div className="grid grid-cols-[repeat(32,minmax(0,1fr))] w-full">
        {Array.from({ length: 32 * 2 }).map((_, index) => (
          <div
            key={index}
            className={`p-4 ${ (Math.floor(index / 32) + index) % 2 === 0 ? 'bg-pink-300' : 'bg-pink-200' }`}
          ></div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-white p-20 relative">
        {/* Logo */}
        <div className="absolute top-0 left-12 p-4">
          <img src={LoveriviLogo} alt="Loverivi Logo" className="h-20" />
        </div>

        {/* Flex Container for Three Sections */}
        <div className="flex justify-between w-full">
          {/* Contact Info (1/3) */}
          <div className="w-1/3 text-left">
            <p className="text-black font-cooper-black font-bold text-lg">CONTACT US</p>
            <div className="flex flex-col space-y-3 mt-1">
              <div className="text-sm text-black flex items-center">
                <img src={FbLogo} alt="Facebook Logo" className="h-4 mr-3" />
                <a href="https://www.facebook.com/loverivi.ph" target="_blank" rel="noopener noreferrer" className="text-black no-underline">
                  www.facebook.com/loverivi.ph
                </a>
              </div>
              <div className="text-sm text-black flex items-center">
                <img src={EmailLogo} alt="Email Logo" className="h-3 mr-2" />
                <a href="mailto:loverivi28@gmail.com" className="text-black no-underline">loverivi28@gmail.com</a>
              </div>
              <div className="text-sm text-black flex items-center">
                <img src={IGLogo} alt="Instagram Logo" className="h-4 mr-2" />
                <a href="https://www.instagram.com/loverivicustomgiftsandprints" target="_blank" rel="noopener noreferrer" className="text-black no-underline">
                  @loverivicustomgiftsandprints
                </a>
              </div>
              <div className="text-sm text-black flex items-center">
                <img src={CallLogo} alt="Call Logo" className="h-4 mr-2" />
                <p>0927 009 2386</p>
              </div>
            </div>
          </div>

          {/* Quick Links (1/3) */}
          <div className="w-1/3 text-left">
            <p className="text-black font-cooper-black font-bold text-lg">QUICK LINKS</p>
            <div className="flex flex-col space-y-2 mt-1">
              <a href="/home" className="text-sm text-black no-underline">HOME</a>
              <a href="/services" className="text-sm text-black no-underline">SERVICES</a>
              <a href="/shop" className="text-sm text-black no-underline">SHOP</a>
              <a href="/aboutus" className="text-sm text-black no-underline">ABOUT US</a>
            </div>
          </div>

          {/* Newsletter (1/3) */}
          <div className="w-1/3 text-left">
            <p className="text-black font-cooper-black font-bold text-lg">NEWSLETTER</p>
            <p className="text-sm text-black mt-2">
              Discover Exciting New Souvenirs, Mementos, and Keepsakes – Perfect for Every Memory!
            </p>
            <form className="mt-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-1 border bg-pink-200 rounded-l-md w-80 focus:outline-none placeholder-gray-500"
                />
                <button className="bg-pink-500 text-white px-2 py-1 rounded-r-md ">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-pink-300 p-1 text-center">
        <p className="text-black">Love, Rivi Custom Gifts and Prints</p>
      </div>
    </footer>
  );
}

export default Footer;