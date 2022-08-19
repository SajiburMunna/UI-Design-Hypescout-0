import React from 'react';
import PropTypes from 'prop-types';


const Pagination = () => {
    return (
   <div className='mt-10 mb-10'>
   <div className="grid grid-cols-6 gap-4">
  <div className='flex items-center '>
  <svg    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
<span className='text-[#FFFFFF] xl:block lg:block md:block sm:block hidden ml-2'>Previous</span>
  </div>
  
  <div className="col-span-4 text-center text-[#FFFFFF] ">

   <span className='text-[#FFFFFF] m-1 bg-[#17181B] pt-2 pb-2 pl-3 pr-3 rounded-full'>1</span>  
   <span className='text-[#FFFFFF] m-1'>2</span>  
   <span className='text-[#FFFFFF] m-1'>3</span>  
   <span className='text-[#FFFFFF] m-1'>...</span>  
   <span className='text-[#FFFFFF] m-1'>8</span>  
   <span className='text-[#FFFFFF] m-1'>9</span>     
   <span className='text-[#FFFFFF] m-1'>10</span>  


  
  </div>
  
 <div className=" flex justify-end items-center    ">
   
<span className='text-[#FFFFFF]  xl:block lg:block md:block sm:block hidden mr-2'>Next</span>
<div>
<svg     xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
</div>

    
  </div>
  
</div>
        </div>
    );
};


Pagination.propTypes = {

};


export default Pagination;
