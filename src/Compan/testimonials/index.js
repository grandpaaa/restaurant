import React from 'react'
import {Link} from 'react-router-dom'
import { Select, Breadcrumb, Carousel } from 'antd';
import {InstagramOutlined, HeartOutlined, SearchOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import './style.css'

const { Option } = Select;

const contentStyle = {
    height: '40px',
    color: '#fff',
    lineHeight: '10px',
    textAlign: 'center',
};

function About_underheader() {
    return(
        <div class="testimonials">
           <div class="testimonials_top">
               <h6>Testimonials</h6>
               <h5>WHAT PEOPLE SAY</h5>
           </div>
           <Carousel autoplay style={{marginTop: '30px'}}>
                <div>
                    <p style={contentStyle}>I will never stop visiting this place. It is just a hideaway for me. It is located in a quiet district and I like to come here after work. I enjoy my meals and think of my global plans. Everything is perfect here.</p>
                    <h1 style={contentStyle}>- JOHN DOE, VISITOR</h1>
                </div>
                <div>
                    <p style={contentStyle}>I had my birthday party here this weekend. I have heard so many good reviews of this restaurant. It did not disappoint. The food was spectacular. Fresh and delicious. Everyone was very pleased.</p>
                    <h1 style={contentStyle}>- JULIA SMITH, VISITOR</h1>
                </div>
                <div>
                    <p style={contentStyle}>This place was fun and the food was good. The diversity of your menu impressed so much. All the dishes tasted great. Thank you! Would definitely recommend to all my friends.</p>
                    <h1 style={contentStyle}>- JOHN DOE, VISITOR</h1>
                </div>
            </Carousel>
        </div>
    )
}

export default About_underheader