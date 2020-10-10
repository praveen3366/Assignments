import React, { Fragment } from 'react';
import Spacer from './Spacer';
import StatusBar from './StatusBar';

const Title = ({ title, high, med, low }) => {
    return (
        <div style={{ marginBottom: 21 }}>
            <h1>{title}</h1>
            <StatusBar high={high} med={med} low={low} />
        </div>
    );
}

export default Title;

