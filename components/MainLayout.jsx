import React from 'react';
import Footer from './Footer';
import Header from './Header';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {
                children
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;