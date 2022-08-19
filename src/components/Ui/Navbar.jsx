import React from 'react';
import useDarkMode from '../../hooks/useDarkMood';
import logo from "../../images/logo.svg"

import user from "../../images/user.svg"
 


const Navbar = () => {

    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div>
 
<nav   className='flex justify-around items-center h-[80px]' style={{backgroundColor:"#17181B" }}>
 
    <div>
       <img src={logo} alt="" />
    </div>
    <div  className='flex justify-around items-center hidden xl:block lg:block md:block sm:block'>
        <span style={{fontSize:"16px",backgroundColor:"#202124",padding:'10px',color:'white',borderRadius:"4px"}} className='ml-2 '>Dashboard</span>
        <span style={{color:"#637381"}} className='ml-2'>Campaign</span>
        <span style={{color:"#637381"}} className='ml-2'>Hypesocial</span>
        <span style={{color:"#637381"}} className='ml-2'>Insights</span>
    </div>
    <div className=' flex justify-center items-center'>
        <div>
        <svg  className="w-6 h-6 inline-block cursor-pointer mt-2 " xmlns="http://www.w3.org/2000/svg"  fill="#637381" class="bi bi-bell" viewBox="0 0 24 24">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg>
        </div>
    <div
              onClick={() => setTheme(colorTheme)}
              
            >
              {colorTheme !== "light" ? (
                <svg
                  className="w-6 h-6 inline-block cursor-pointer  "
                  fill="none"
                  stroke="#637381"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 inline-block cursor-pointer  "
                  fill="none"
                  stroke="#637381"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </div>

            <div className='flex items-center '>
            <span className='text-[#959CB6] text-[12px] ml-[21px] '>Hi,Sojib</span>
            <img className='ml-2' src={user} alt="" />

          <div className='xl:hidden lg:hidden md:hidden sm:hidden block ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#637381" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

            </div>


            </div>

         
    </div>

  
  
</nav>


        </div>
    );
};


 


export default Navbar;
