import React from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import TopBody from '../TopBody/TopBody';

const Mainpage = () => {
    return (
        <div>
            <Header />
            <TopBody />
            <Cards></Cards>
        </div>
    );
};

export default Mainpage;