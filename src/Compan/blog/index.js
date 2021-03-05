import React from 'react'
import {Card} from 'antd'

function Blog(props) {
    const {edit, del, id, key, title, desc} = props;
    console.log(id)
    return(
        <Card title={title} extra={<button onClick={() => del({id})}>delete</button>} style={{ width: 300 }}>
        <p>{desc}</p>
        <button onClick={edit}>Edit</button>
      </Card>
    )
}

export default Blog