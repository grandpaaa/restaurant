import React from 'react'
import {Link} from 'react-router-dom'
import { Select } from 'antd';
import {InstagramOutlined, HeartOutlined, SearchOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import './style.css'

function Ourgallery() {
    return(
        <div>
            <div class="ourgallery">
            </div>
            <div class="pmenu" style={{display: 'block', zIndex: '5'}}>
                <h1>Our gallery</h1>
                <p>OUR RESTAURANT’S HIGHLIGHTS</p>
            </div>
        </div>
    )
}

export default Ourgallery;