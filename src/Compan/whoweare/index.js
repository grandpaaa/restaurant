import React from 'react'
import {Link} from 'react-router-dom'
import { Select, Breadcrumb } from 'antd';
import {InstagramOutlined, HeartOutlined, SearchOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import './style.css'

const { Option } = Select;

function Whoweare() {
    return(
        <div class="who">
            <div class="who_inf">
                <h5>Who We Are</h5>
                <img src="https://livedemo00.template-help.com/wt_prod-12864/images/image-04-570x321.jpg"/>
                <p>At our restaurant, you can find representatives of the most popular cuisines on a worldwide scale. Whether you want a usual or exotic dish, don’t hesitate to leaf through our diverse menu and order what you like. We use only healthy ingredients, thus making our meals suitable for people who keep an eye on their ration or follow a diet. Are you a diner with special dietary needs? Then, you must pay a visit to our top-notch restaurant and try our wholesome food.</p>
            </div>
        </div>
    )
}

export default Whoweare