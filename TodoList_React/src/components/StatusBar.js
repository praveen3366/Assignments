import React from 'react';
import Spacer from './Spacer';

const StatusBar = ({ high, med, low }) => {
    return (
        <span>
            <Spacer>High Priority Tasks: {high}</Spacer>

            <Spacer>Medium Priority Tasks: {med}</Spacer>

            <Spacer>Low Priority Tasks: {low}</Spacer>
        </span>
    );
};

export default StatusBar;