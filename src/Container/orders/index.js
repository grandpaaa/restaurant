import React, {useEffect} from 'react'
import { Table, Space, Button, Spin} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderAction'
import {withRouter} from 'react-router-dom'
import Header from '../../Compan/header'



function Orders(props) {
    useEffect(() => {
      props.orderActions.getOrder()
    }, [])

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Order date',
          dataIndex: 'orderdate',
          key: 'createdAt',
        },
        {
            title: 'Restaurant name',
            dataIndex: 'restaurantId',
            key: 'restaurantId',
        },
        {
            title: 'Guest',
            dataIndex: 'guest',
            key: 'guest',
        }, 
      ];

      const data = props.orders?.map((item, i) => {          
          return {
            key: i,
            orderdate: item.orderdate,
            id: item.id,
            userId: item.userId,
            restaurantId: item?.Restaurant?.name,
            guest: item.guest
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
    isLoading: state.order.isLoading,
    orders: state.order.orders
  })
  
  const mapDispatchToProps = dispatch => ({
    orderActions: bindActionCreators(orderActions, dispatch)
  })
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Orders))