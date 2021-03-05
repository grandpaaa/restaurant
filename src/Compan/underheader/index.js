import React from 'react'
import {Link} from 'react-router-dom'
import { Select } from 'antd';
import {InstagramOutlined, HeartOutlined, SearchOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import './uh.css'

const { Option } = Select;

function Underheader() {
    return(
        <div>
            <div class="uh"></div>
            <div class="uh_img"><img src="https://livedemo00.template-help.com/wt_prod-12864/images/logo-intro.png"/></div>
            <div class="adress" style={{margin: '15px 0'}}><a href="#">4578 Marmora Road, Glasgow D04 89GR</a></div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p style={{margin: '0 10px', color: '#fff', fontWeight: 'bold'}}>10:00 am - 11:00 pm</p>
                <a style={{margin: '0 10px', color: '#fff', fontWeight: 'bold'}}>80023456789</a>
            </div>
            <div class="uh_btn" style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <button>make a reservation</button>
            </div>
        </div>
    )
}

export default Underheader