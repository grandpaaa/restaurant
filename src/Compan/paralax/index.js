import React from 'react'
import {Link} from 'react-router-dom'
import { Select } from 'antd';
import {InstagramOutlined, HeartOutlined, SearchOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import './paralaxmenu.css'

function Paralaxmenu() {
    return(
        <div>
            <div class="paralaxmenu">
            </div>
            <div class="pmenu" style={{display: 'block', zIndex: '5'}}>
                <h1>Our Menu</h1>
                <p>BREAKFASTS | LUNCHES | DINNERS</p>
            </div>
        </div>
    )
}

export default Paralaxmenu