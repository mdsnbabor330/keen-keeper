import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
      <footer className="bg-[#244D3F] text-white py-10 px-6 md:px-16 font-sans ">
      <div className="max-w-290 mx-auto ">
        <div className="flex flex-col  justify-between items-center mb-6 space-y-5">
          <div className="flex flex-col items-center space-y-4">
            <h1 className='text-[48px] text-white font-bold'>KeenKeeper</h1>
            <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          </div>

          <div className="flex flex-col items-center ">
            <span className="text-sm font-medium mb-3">Social Links</span>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href="#"
                className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="#"
                className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>

  
        <hr className="border-gray-400 mb-6" />
        <div className='flex justify-between items-center'>
          <p className="text-xs text-gray-400">
          &copy; 2026 KeenKeeper. All rights reserved. 
          </p>
          <ul className='flex gap-5 text-xs text-gray-400'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
        
      </div>
    </footer>
    );
};

export default Footer;