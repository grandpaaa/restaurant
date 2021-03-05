import React, {useEffect} from 'react'
import { Table, Space, Button, Spin, Image, Card} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as favoriteActions from '../../actions/favoriteAction'
import {withRouter} from 'react-router-dom'
import Header from '../../Compan/header'

function Favorites(props) {

    useEffect(() => {
        props.favoriteActions.getFavorite()
      }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Restaurant name',
            dataIndex: 'restaurantId',
            key: 'restaurantId',
        },
        {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
        },
    ];


    const data = props.favorites?.map((item, i) => {          
        return{
            key: i,
            id: item.id,
            restaurantId: item?.Restaurant?.name,
            image: <Image width={100}  src={'http://37.18.30.124:9000/'+item?.Restaurant?.image} />, 
        }
    })   

    return(
        <div>
            <Header/>
            <Spin spinning={props.isLoading}>
                <Table size="small" columns={columns} dataSource={data} style={{position: 'relative', top: '100px'}}/>
            </Spin>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.favorite.isLoading,
    favorites: state.favorite.favorites
})
  
const mapDispatchToProps = dispatch => ({
    favoriteActions: bindActionCreators(favoriteActions, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Favorites))