import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Slider from './Slider';
import Slider2 from './Slider';


const Search = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='bg-[#17181B] p-5 rounded' >


      <div className=" xl:grid lg:grid md:grid  grid-cols-6 gap-4   ">
        <div >


          <h1 className='text-[24px] font-[500] text-[#FFFFFF]'>Profile (100)</h1>
        </div>

        <div className="col-span-4  ">



          <form class="flex items-center">

            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input style={{ backgroundColor: "#17181B" }} type="text" id="simple-search" className="bg-gray-500 border    text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>

          </form>
        </div>

        <div className='flex justify-center xl:block lg:block md:block sm:block'>

          <div onClick={openModal} className="bg-[#564FB1] flex justify-center items-center  p-3 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-2 xl:w-full lg:w-full md:w-full sm:w-full w-32 rounded">



            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-funnel" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
              </svg>
            </div>

            <div className='text-[#FFFFFF] font-bold xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[10px]'>Advance Filter</div>
          </div>
        </div>


      </div>

      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='flex justify-between'>
          <div></div>
          <div onClick={closeModal} className='text-[#ff0000] cursor-pointer'>
            X
          </div>
        </div>

        <div className='flex justify-between   '>
          <div className='w-1/2'></div>
          <div className='bg-[#17181B] font-[15px] font-bold w-80'>
            <div className='p-2 '>
              <h1 className='text-[#FFFFFF]'>Filter Option</h1>
              <hr className='text-[#2B2B3E] mt-1'></hr>

              <div>

                <label for="countries" class="block mb-1 text-[14px] mt-2 font-normal text-[#CDCDDD] ">Influencer’s industry</label>
                <select id="countries" class="bg-[#050405] border border-[#050405] text-[#919EAB] text-[14px] rounded focus:ring-[#050405] focus:border-[#050405] block w-full p-2.5 dark:bg-[#050405] dark:border-[#050405] dark:placeholder-[#919EAB] dark:text-[#919EAB]dark:focus:ring-[#050405] dark:focus:border-[#050405]">
                  <option className='font-normal'  >Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>


              <div>

                <label for="countries" class="block mb-1 text-[14px] mt-2 font-normal text-[#CDCDDD] ">Influencer’s Country</label>
                <select id="countries" class="bg-[#050405] border border-[#050405] text-[#919EAB] text-[14px] rounded focus:ring-[#050405] focus:border-[#050405] block w-full p-2.5 dark:bg-[#050405] dark:border-[#050405] dark:placeholder-[#919EAB] dark:text-[#919EAB]dark:focus:ring-[#050405] dark:focus:border-[#050405]">
                  <option className='font-normal'  >Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>


              <div>

                <label for="countries" class="block mb-1 text-[14px] mt-2 font-normal text-[#CDCDDD] ">Audience’s Country</label>
                <select id="countries" class="bg-[#050405] border border-[#050405] text-[#919EAB] text-[14px] rounded focus:ring-[#050405] focus:border-[#050405] block w-full p-2.5 dark:bg-[#050405] dark:border-[#050405] dark:placeholder-[#919EAB] dark:text-[#919EAB]dark:focus:ring-[#050405] dark:focus:border-[#050405]">
                  <option className='font-normal'  >Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div>

                <label for="countries" class="block mb-1 text-[14px] mt-2 font-normal text-[#CDCDDD] ">Influencer’s Social Media Platform</label>
                <select id="countries" class="bg-[#050405] border border-[#050405] text-[#919EAB] text-[14px] rounded focus:ring-[#050405] focus:border-[#050405] block w-full p-2.5 dark:bg-[#050405] dark:border-[#050405] dark:placeholder-[#919EAB] dark:text-[#919EAB]dark:focus:ring-[#050405] dark:focus:border-[#050405]">
                  <option className='font-normal'  >Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

               <Slider2></Slider2>

              <div>

                <span className='text-[#CDCDDD] text-[14px] mt-2'>Influencer’s Gender </span>

                <div className='flex'>

                  <div class="flex items-center   ">
                    <input checked id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-6 h-6  " />
                    <label for="bordered-radio-1" class="  ml-2 w-full text-sm font-medium   text-[#CDCDDD]">Male</label>
                  </div>

                  <div class="flex items-center   ">
                    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-6 h-6 text-blue-600" />
                    <label for="bordered-radio-1" class="  ml-2 w-full text-sm font-medium   text-[#CDCDDD]">Female</label>
                  </div>

                </div>


              </div>
                <div className='flex justify-between'>
                  <div ></div>
                  <div className='flex '>
                   <button className='bg-[#050405] rounded border-none text-[#6D6D7E] font-[14px] pl-4 pr-4 py-1'>Reset</button>
                   <button className='bg-[#564FB1] ml-2  border-none text-[#FBFBFB] rounded font-[14px] pl-4 pr-4 py-1'>Apply</button>
                  </div>

                </div>

            </div>

          </div>
        </div>
      </Modal>

    </div>
  );
};





export default Search;
