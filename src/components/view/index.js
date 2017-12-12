import React from 'react';
import {connect} from 'react-redux';
import getRoutes from '../../routes/routes';
import './index.css';

const View = (props) => {
    let Page = getRoutes(props.filter);
    return (
        <div className="View">
            <Page/>
        </div>
    );
}

export default View;