import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Title from './components/Title';
import InputField from './components/InputField';
import SelectFilter from './components/SelectFilter';
import Spacer from './components/Spacer';

const App = (props) => {
    const [tasks, setTasks] = useState([
        { name: "Buy Newspaper", isComplete: false, priority: 'low' },
        { name: "Car Wash", isComplete: true, priority: 'med' },
        { name: "Buy Groceries", isComplete: false, priority: 'high' }
    ])

    const [priority, setPriority] = useState('All');

    const toggleTask = (taskIndex) => {
        setTasks(tasks.map((task, index) => {
            if (taskIndex === index) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task
        }))
    };

    const addNewTask = (name, priority) => {
        let newTask = { name, isComplete: false, priority };
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (deletedId) => {
        setTasks(tasks.filter((task, index) => deletedId !== index));
    }

    const lowPriorityTasks = tasks.filter(task => task.priority == 'low');
    const medPriorityTasks = tasks.filter(task => task.priority == 'med');
    const highPriorityTasks = tasks.filter(task => task.priority == 'high');
    const lowPriorityTasksCount = lowPriorityTasks.length;
    const medPriorityTasksCount = medPriorityTasks.length;
    const highPriorityTasksCount = highPriorityTasks.length;
    let taskPriority = null;
    if (priority == 'high') {
        taskPriority = <h3>High Priority Tasks</h3>;
    } else if (priority == 'med') {
        taskPriority = <h3>Medium Priority Tasks</h3>;
    } else if (priority == 'low') {
        taskPriority = <h3>Low Priority Tasks</h3>;
    } else {
        taskPriority = <h3>All Tasks</h3>;
    }

    return (
        <Fragment>
            <Title title={props.title} high={highPriorityTasksCount} med={medPriorityTasksCount} low={lowPriorityTasksCount} />
            <SelectFilter selectPriority={setPriority} />
            <Spacer>
                <InputField addNewTask={addNewTask} />
            </Spacer>
            {taskPriority}
            <List items={tasks} filterValue={priority} toggleTask={toggleTask} deleteTask={deleteTask} />

            {/* {highPriorityTasks.length != 0 ? <span><h3 >High Priority Tasks</h3><List items={highPriorityTasks} onlyPresentation></List></span> : null}
            {medPriorityTasks.length != 0 ? <span><h3 >Med Priority Tasks</h3><List items={medPriorityTasks} onlyPresentation></List></span> : null}
            {lowPriorityTasks.length != 0 ? <span><h3 >Low Priority Tasks</h3><List items={lowPriorityTasks} onlyPresentation></List></span> : null} */}
        </Fragment>
    )
};
const RootElement = document.querySelector('#root');
ReactDOM.render(<App title="Todo list App" />, RootElement);