import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaranActions from '../../actions/restaranAction'
import * as reviewActions from '../../actions/reviewAction'
import * as orderActions from '../../actions/orderAction'
import * as favoriteActions from '../../actions/favoriteAction'
import {withRouter} from 'react-router-dom'
import Header from '../../Compan/header'
import {UserOutlined, HomeOutlined, PhoneOutlined, PoundOutlined, LikeOutlined, ProfileOutlined} from '@ant-design/icons'
import {Card, Rate, Tag, Image, Comment, Form, Button, Input, DatePicker, Slider, Switch, message} from 'antd'
import moment from 'moment';
import './style.css'
import Footer from '../../Compan/footer'
import jwtDecode from 'jwt-decode'

const {Meta} = Card;
const { TextArea } = Input;

function Restmore(props) {
    const id = new URLSearchParams(props.location.search).get('id');
    const [comment, setComment] = useState({
        text: '',
        restaurantId: id
    })    
    const [order, setOrder] = useState({
        orderdate: '',
        guest: '',
        restaurantId: id
    })

    useEffect(() => {
        props.restaranActions.getRest(id)
    }, [])
    
    const onChange = (e) => {
        setComment(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))    
    
    }
    
    const handleChange = (e) => {
        setOrder(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))    
    }

    const onSubmit = () => {
        props.reviewActions.addReview(comment)
    }
    const onOrder = () => {
        props.orderActions.addOrder(order)
    }
    
    const restaran = props.restaran

    const addFav = (id) => {
        const userId = jwtDecode(localStorage['token']).id
            props.favoriteActions.addFavorite({
                userId: userId,
                restaurantId: id
            })
            message.success('Added to favorites')
    }



    const kitchens = restaran.ResKitLists?.map((item, i) => (
        <Tag Key={i} style={{cursor: 'pointer', padding: '3px'}} color="warning">{item.Kitchen.name}</Tag>
    ))

    const review = restaran.Reviews?.map((item, i) => (
        <Comment
            content={
                <p>{item.text}</p>
            }
            avatar={
                <UserOutlined />
            }
            style={
                {
                    width: '100%',
                    boxShadow: '0px 0 10px rgba(255, 164, 98, 0.5)',
                    padding: '0 30px',
                    margin: '30px 0'
                }
            }
        />
    ))

    return(
        <div>
            <Header/>
            <div className="rest_info">
                <div className="rest_ab">
                    <div className="resto_name">{restaran.name}</div>
                    <div className="rest_img"><Image src={`http://37.18.30.124:9000/${restaran.image}`}/></div>                
                    <div className="rest_block">
                        <div className="info_block">
                            <div  className="resto_name">{restaran.name}<Button onClick={() => addFav(id)}>Add to favorites</Button></div>
                            
                            <div><HomeOutlined style={{fontSize: '30px', color: '#845ec2'}}/><span> Сity:</span> {restaran.location}</div>
                            <div><PhoneOutlined style={{fontSize: '30px', color: '#ff5e78'}}/><span> Phone:</span> {restaran.phone}</div>
                            <div><UserOutlined style={{fontSize: '30px', color: '#ffc75f'}}/><span> Amount of place:</span> {restaran.amountOfPlace}</div>
                            <div><PoundOutlined style={{fontSize: '30px', color: '#95ddaf'}}/><span> Average bill:</span> {restaran.averageBill}$</div>
                            <div><LikeOutlined  style={{fontSize: '30px', color: '#ff5e78'}}/><span> Rate:</span> <Rate value={restaran.rate} disabled></Rate></div>
                            <div><ProfileOutlined style={{fontSize: '30px', color: '#845ec2'}}/><span> kitchens:</span> {kitchens}</div>
                        
                        </div>
                        <div className="order_block">
                            <Form style={{width: 250}} onFinish={onOrder}>
                                <h3 className="ord_name">Order</h3>
                                <Form.Item>
                                    <Input placeholder="Date: YYYY:MM:DD HH:MM:ss" name="orderdate" onChange={handleChange}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder="Number of guests" name="guest" onChange={handleChange}/>
                                </Form.Item>    
                                <Form.Item>
                                    <Button htmlType="submit" type="primary">
                                        Make order
                                    </Button>
                                </Form.Item>                             
                            </Form>
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>
                <div style={{marginTop: '100px'}}>
                    <h1 style={{textAlign: 'center'}}>Reviews</h1>
                    {review?.length ? review : 'So far, no comments(, be the first!'}
                    <div>
                        {localStorage['token'] ?
                        <Form style={{width: '100%'}} onFinish={onSubmit}>
                            <Form.Item>
                                <TextArea rows={2} onChange={onChange} placeholder="Write a comment" name="text"/>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">
                                    Add Comment
                                </Button>
                            </Form.Item>                             
                        </Form>:
                        <Button htmlType="submit" type="primary" onClick={() => window.location.href="/signup"}>
                            Sign In
                        </Button>
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>            
    )
}

const mapStateToProps = state => ({
    isLoading: state.restaran.isLoading,
    restaran: state.restaran.restaran,
    kitchen: state.kitchen.kitchen,
    review: state.review.review,
    favorites: state.favorite.favorites
})
  
const mapDispatchToProps = dispatch => ({
    restaranActions: bindActionCreators(restaranActions, dispatch),
    reviewActions: bindActionCreators(reviewActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch),
    favoriteActions: bindActionCreators(favoriteActions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Restmore))