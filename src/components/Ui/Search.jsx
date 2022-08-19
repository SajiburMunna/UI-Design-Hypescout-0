import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

 
const Search = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='bg-[#17181B] p-5' >
        
 
<div className="grid grid-cols-6 gap-4   ">
  <div >
    

    <h1 className='text-[24px] font-[500] text-[#FFFFFF]'>Profile (100)</h1>
  </div>
  
  <div className="col-span-4  ">



  <form class="flex items-center">   
  
  <div class="relative w-full">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <input style={{backgroundColor:"#17181B" }} type="text" id="simple-search" className="bg-gray-500 border    text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
  </div>
  
</form>
  </div>
  
  <div  onClick={openModal} className="bg-[#564FB1] flex justify-center items-center">

    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
</svg>
    </span>

    <span className='text-[#FFFFFF] text-[14px]'>Advanced Filter</span>
  </div>
  
</div>

<Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        
         hello
      </Modal>
            
        </div>
    );
};


 


export default Search;
