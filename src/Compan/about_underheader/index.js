import React from 'react'
import {Link} from 'react-router-dom'
import { Select, Breadcrumb } from 'antd';
import {InstagramOutlined, HeartOutlined, SearchOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import './style.css'

const { Option } = Select;

function About_underheader() {
    return(
        <div>
            <div class="uhh"></div>
            <div class="uhh_img"><img src="https://livedemo00.template-help.com/wt_prod-12864/images/logo-intro.png"/></div>
            <div class="a_name"><h6 class="about_name">About Us</h6></div>
            <Breadcrumb class="crumb">
                <Breadcrumb.Item>
                    <a href="/mainpage" style={{color: '#fff', fontWeight: 'bold'}}>Home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item style={{color: '#fff', fontWeight: 'bold'}}>About Us</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default About_underheader