import React, { Fragment, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faMinusCircle, faLessThan } from '@fortawesome/free-solid-svg-icons';
import Spacer from './Spacer';
const inputField = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState("low");
    const updateInputField = (event) => {
        let inputText = event.target.value;
        setInputValue(inputText);
    }

    const addNewTask = () => {
        if (inputValue) {
            props.addNewTask(inputValue, priority)
        }
        setInputValue('')
        setPriority('');
    }

    return (
        <span style={{ margin: 15, marginBottom: 30 }}>
            <Spacer><input type="text" value={inputValue} onChange={updateInputField} placeholder="Enter new task" /></Spacer>

            <Spacer><button className="cursor-pointer" onClick={addNewTask}>➕</button></Spacer>

            <ReactTooltip />
            <Spacer><FontAwesomeIcon className="cursor-pointer" data-tip="high" style={priority == 'high' ? { color: 'red' } : ''} onClick={() => { setPriority('high') }} icon={faExclamationCircle} /></Spacer>

            <Spacer><FontAwesomeIcon className="cursor-pointer" data-tip="med" style={priority == 'med' ? { color: 'red' } : ''} onClick={() => { setPriority('med') }} icon={faMinusCircle} /></Spacer>

            <Spacer><FontAwesomeIcon className="cursor-pointer" data-tip="low" style={priority == 'low' ? { color: 'red' } : ''} onClick={() => { setPriority('low') }} icon={faLessThan} /></Spacer>

        </span>
    )
};

export default inputField;