import React, {useState} from 'react'
import TodoList from '../todolist'
import TodoInput from '../todoinput'

function ToDo() {
    const [tasks, setTasks] = useState([
        {id: '0', todo: 'make homework'},
        {id: '1', todo: 'make a site'}
    ])

    const [task, setTask] = useState(``)
    const handleChange = e => {
        setTask(e.target.value)
    }
    const add = () => {
        setTasks([...tasks, {todo: task}])
    }
    
    const tasksItems = tasks.map((item, i) => <TodoList id={i} key={i} tasks={item.todo}/>)
    return(
        <div style={{background: 'rgb(82, 51, 196)', width: '30%', margin: '0 auto'}}>
            <TodoInput handleChange={handleChange} add={add}/>
            {tasksItems}
        </div>
    )
}

export default ToDo;