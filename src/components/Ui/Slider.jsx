import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'



const Slider2 = () => {

    const [value,setValue]=useState(0)
 
  const  handleChangeStart = () => {
        console.log('Change event started')
      };
    
   const    handleChange = value => {
    setValue(value)
      };
    
   const   handleChangeComplete = () => {
        console.log('Change event completed')
      };
    return (
        <div>
            <div className='slider'>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={handleChangeStart}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
       
      </div>
            
        </div>
    );
};


Slider.propTypes = {

};


export default Slider2;
