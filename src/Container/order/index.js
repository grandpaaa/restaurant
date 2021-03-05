import React, {useEffect} from 'react'
import { Table, Space, Button, Spin} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderAction'
import {withRouter} from 'react-router-dom'



function Order(props) {
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
            title: 'User Id',
            dataIndex: 'userId',
            key: 'Id',
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
        <Spin spinning={props.isLoading}>
            <Table size="small" columns={columns} dataSource={data} />
        </Spin>

    )
}
const mapStateToProps = state => ({
    isLoading: state.order.isLoading,
    orders: state.order.orders
  })
  
  const mapDispatchToProps = dispatch => ({
    orderActions: bindActionCreators(orderActions, dispatch)
  })
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Order))