import React from 'react';
import './Container.css';

const Container = ({ children }) => {
    return (
        <div className='main_container'>
            {children}
        </div>
    );
};

export default Container;