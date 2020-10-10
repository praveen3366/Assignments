import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faMinusCircle, faLessThan, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Spacer from './Spacer';
const list = props => {
    return (
        <ul style={{ listStyle: "none" }}>
            {
                props.items.map((task, index) => {
                    let priority = null;
                    if (task.priority == 'high') {
                        priority = <FontAwesomeIcon icon={faExclamationCircle} />
                    } else if (task.priority == 'med') {
                        priority = <FontAwesomeIcon icon={faMinusCircle} />
                    } else {
                        priority = <FontAwesomeIcon icon={faLessThan} />
                    }

                    const onListClick = () => {
                        props.toggleTask(index);
                    }
                    const deleteTask = () => {
                        props.deleteTask(index);
                    }
                    if (props.filterValue == 'All' || props.filterValue == task.priority) {
                        return (
                            <Fragment key={index}>
                                <li style={{ margin: 15, display: 'flex', justifyContent: 'space-between' }}>
                                    <Spacer>
                                        {priority}
                                    </Spacer>
                                    <Spacer>
                                        <span className="task" onClick={!props.onlyPresentation ? onListClick : null}>
                                            Task: {task.name} | Completed: {task.isComplete ? "✔" : "❌"}
                                        </span>
                                    </Spacer>
                                    <Spacer>
                                        {!props.onlyPresentation ? <button onClick={deleteTask}><FontAwesomeIcon className="cursor-pointer" icon={faTrashAlt} /></button> : null}
                                    </Spacer>
                                </li>
                            </Fragment>
                        )
                    } else {
                        return null;
                    }

                })
            }
        </ul>
    )
}
export default list;
