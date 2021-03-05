import React from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'

function Profile(){
    return(
        <div>
            <Button>Log Out</Button>
            <Link to='/mainpage'>Go to main</Link>
        </div>
    )
}

export default Profile