import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const Cards = () => {

    const arr=[1,2,34,5,7,3,3,3]

    return (
        <div>
 

            <div className='flex flex-wrap gap-2 mt-4'>
                
            {
                arr.map((val) => (
                    <Card></Card>
                    
                )
                 )
             }
            </div>

            
            
        </div>
    );
};


Cards.propTypes = {

};


export default Cards;
