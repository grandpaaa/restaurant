import React, {isValidElement, useState} from 'react'

function TodoInput({handleChange, add}) {

    return(
        <div>
            <input onChange={handleChange}/>
            <button onClick={add}>add todo</button>
        </div>
    )
}

export default TodoInput
