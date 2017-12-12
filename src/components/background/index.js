import React from 'react';
import './index.css';

const Header = (props) => {
    return (
        <div>
            <img
                className={"background-img"}
                src={props.src}
                alt={(props.alt != null) ? props.alt : ""}/>
        </div>
    );
}

export default Header;