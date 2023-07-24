import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t-2 py-16 flex flex-col">
        <div className="flex flex-grow-0 flex-col md:flex-row text-center mb-16 space-y-8 md:space-y-0 sm:space-x-6 justify-center md:justify-around items-center">
          <a className="md:self-start items-center" href="#">
            <div className="flex justify-center items-center mb-8 md:my-0">
              <div className="flex justify-center">
                <span className="pt-1 mx-3 whitespace-nowrap text-4xl italic font-light text-gray-400 hover:text-gray-900">SwiftEn<span className='text-red-700'>roll</span></span>
              </div>
            </div>
          </a>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h3>
            <ul>
              <li className="mb-4"><a href="https://flowbite.com"  className="text-gray-600 hover:underline">React</a></li>
              <li><a href="https://tailwindcss.com/"  rel="nofollow" className="text-gray-600 hover:underline">Tailwind CSS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h3>
            <ul>
              <li className="mb-4"><a href="https://github.com/themesberg/flowbite" className="text-gray-600 hover:underline">Github</a></li>
              <li><a href="https://discord.gg/4eeurUVvTy" className="text-gray-600 hover:underline">Discord</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h3>
            <ul>
              <li className="mb-4"><a href="#" target="_blank" className="text-gray-600 hover:underline">Privacy Policy</a></li>
              <li><a href="#" target="_blank" className="text-gray-600 hover:underline">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-200 sm:mx-auto" />
        <div className="flex flex-col items-center justify-around">
          <div className="flex my-4 space-x-6 sm:justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Social media SVG icon goes here */}
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Social media SVG icon goes here */}
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Social media SVG icon goes here */}
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Social media SVG icon goes here */}
              </svg>
            </a>
          </div>
          <span className="text-sm text-gray-500 sm:text-center">
            <a href="https://github.com/RagAndRoll" className="hover:underline">© 2023  Zahid Hasan. All Rights Reserved.</a>
          </span>
        </div>
      </footer>
    );
};

export default Footer;