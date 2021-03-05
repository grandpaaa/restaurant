import React from 'react'
import {Link} from 'react-router-dom'
import { Select } from 'antd';
import {InstagramOutlined, HeartOutlined, SearchOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import './about.css'

function About() {
    return(
        <div class="about">
            <div class="inf" style={{color: '#000'}}>
                <div>
                    <h2>Welcome</h2>
                    <h4>TO OUR RESTAURANT</h4>
                </div>
                <div class="about_p">
                    <p>Would you like to savor the exquisite cuisine and bring the art of dining to a new level? We obtain the freshest products from reputable purveyors and incorporate them into our exclusive dishes. Our menus are influenced by culinary traditions of Europe, Far East and other parts of the world. We are open to experiments and often add new dishes to our a la carte menu. Our courteous and attentive waiters in smoking jackets will bring you anything you wish.</p>
                </div>
            </div>
            <div class="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MG6jHxAfwQk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default About