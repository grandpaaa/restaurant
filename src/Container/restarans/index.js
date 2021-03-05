import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import * as restaranActions from '../../actions/restaranAction'
import {Card, Pagination, Rate, Button} from 'antd'
import Header from '../../Compan/header'
import RestPage from '../../Compan/restpage'
import './rests.css'
import Footer from '../../Compan/footer'


const {Meta} = Card

function Restarans(props) {
    
    const changePage = (page) => {
        props.restaranActions.getRestaran({
            query: '', 
            page: `${page}`
        })
    }
    useEffect(() => {
        props.restaranActions.getRestaran({
            query: '',
            page: ''
        })
    }, [])
    const restorans = props.restaran.restaurants
    
    const restMore = (item) => {
        window.location.href = `/restmore/?id=${item}`
    }
    const allRests = restorans?.map((item, i) => (
        <div key={i} onClick={() => restMore(item.id)}>
            <Card
                hoverable
                style={{width: '500px', height: '600px', margin: '20px', boxShadow: '0px 0 10px rgba(0, 0, 0, 0.5)'}}
                cover={<img src={'http://37.18.30.124:9000/'+item.image} style={{width: '500px', height: '300px', objectFit: 'cover'}}/>}
            >
                <h4 style={{fontWeight: 'bold'}}>{item.name}</h4>
                <Meta style={{fontSize: '40px'}} description={item.location}/>
                <Meta style={{fontSize: '40px'}} description={item.phone}/>
                <Rate value={item.rate} disabled style={{fontSize: '30px'}}></Rate>
                <div style={{marginTop: '10px'}}><Button style={{fontWeight: 'bold'}}>Make Order</Button></div>
            </Card>
        </div>
    ))
    return(
        <div class="rests">
            <Header/>
            <div style={{width: '100%', padding: '20vh', minHeight:'100vh'}}>
                <div>
                    <h1 style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold', color: '#ffbd05'}}>Restaurants</h1>
                    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>{allRests}</div>
                    {/* <Pagination defaultCurrent={1} total={parseInt(props.total)} pageSize={parseInt(props.pageSize)} onChange={changePage}/> */}
                    <Pagination total={50} onChange={changePage}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    restaran: state.restaran.restaran,
    total: state.restaran.total,
    pageSize: state.restaran.pageSize,
})
  
const mapDispatchToProps = dispatch => ({
    restaranActions: bindActionCreators(restaranActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Restarans))