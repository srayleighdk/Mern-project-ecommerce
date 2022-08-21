import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className='flex p-5 justify-between shadow-md'>
      <div className='flex flex-col items-center'>
          <img className='w-14 h-14' src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="logo" />
          <p className='pl-2 font-Poppins text-lg text'>Ecommerce</p>
      </div>
      <div className='flex items-center space-x-4'>
         <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#home">Home</a>
         <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#server">Server</a>
         <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#about">About</a>
         <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#term">Term</a>
         <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#privacyplicy">Privacy Plicy</a>
      </div>
      <div className='flex flex-col items-center'>
        <p className='font-Poppins text-base'>Follow us on</p>
        <div>
          <a href=""><TwitterIcon className='text-blue-700 hover:text-blue-900 transition-all'/></a>
          <a href=""><FacebookIcon className='text-blue-700 hover:text-blue-900 transition-all'/></a>
          <a href=""><YouTubeIcon className='text-blue-700 hover:text-blue-900 transition-all'/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer