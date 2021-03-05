import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import * as restaranActions from '../../actions/restaranAction'
import {Card, Pagination} from 'antd'
import Header from '../../Compan/header'

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

    const restMore = (i) => {
        window.location.href = `/rests?title=${i}`
    }
    const restorans = props.restaran.restaurants
    const allrests = restorans?.map((item, i) => (
        <div key={i}>
            <Card
                onClick={() => restMore(item.name)}
                hoverable
                style={{width: '300px', height: '320px', background: '#557174', margin: '20px'}}
                cover={<img src={'http://37.18.30.124:9000/'+item.image} style={{width: '300px', height: '200px'}}/>}
            >
                <Meta title={item.name} description={item.location + ', ' + item.phone}/>
            </Card>
        </div>
    )) 

    return(
        <div>
            <Header/>
            
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