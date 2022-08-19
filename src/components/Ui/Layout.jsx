import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Pagination from './Pagination';
import Card from './Card';
import Cards from './Cards';


const Layout = () => {
    return (
        <div className='pr-28 pl-28 pt-10'>
             <Search></Search>
              <Cards></Cards>
             <Pagination></Pagination>
        </div>
    );
};


Layout.propTypes = {

};


export default Layout;
