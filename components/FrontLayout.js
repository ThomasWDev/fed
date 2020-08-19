import React, {useState} from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Frontlayout = (props) => {

    return (
        <>
            <Header/>
            <MainContent {...props}/>
            <Footer/>
        </>
    );
};

export default Frontlayout;