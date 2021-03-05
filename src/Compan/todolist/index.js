import React, {isValidElement, useState} from 'react'

function TodoList(props) {
    const {id, key, tasks} = props
    const [textdec, setTextdec] = useState(false)
    const choose = () => {
        setTextdec(!textdec)
    }
    return(
        <div style={{background: 'rgba(0,0,0,0)', margin: '10px 20%'}}>
            <p style={{textDecoration: textdec ? 'line-through' : 'none', color: 'black', fontWeight: 'bold', justifyContent: 'space-around'}}>
                <input type="checkbox" onChange={choose}/>
                {tasks}
            </p>
        </div>
    )
}

export default TodoList