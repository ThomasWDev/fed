import React, {useState} from 'react';

const MainContent = (props) => {

    return (
        <div>
            {props.children}
        </div>
    );
};

export default MainContent;