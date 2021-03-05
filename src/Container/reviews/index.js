import React, {useEffect} from 'react'
import { Table, Space, Button, Spin} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as reviewActions from '../../actions/reviewAction'
import {withRouter} from 'react-router-dom'



function Reviews(props) {


    const deleteRev = (id) => {
      props.reviewActions.delReview(id)
    }

    useEffect(() => {
      props.reviewActions.getReview()
    }, [])

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Created at',
          dataIndex: 'createdAt',
          key: 'createdAt',
        }, 
        {
          title: 'Text',
          dataIndex: 'text',
          key: 'text',
        },
        {
          title: 'User ID',
          dataIndex: 'userId',
          key: 'userId',
        },  
        {
            title: 'Restaurant ID',
            dataIndex: 'restaurantId',
            key: 'restaurantId',
        },    
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
              <Button type="primary" danger onClick={() => deleteRev(record.id)}>Delete</Button>
            </Space>
          ),
        },
      ];

      const data = props.reviews?.map((item, i) => {
          return {
            key: i,
            createdAt: item.createdAt,
            id: item.id,
            text: item.text,
            userId: item.userId,
            restaurantId: item.restaurantId,
          }
      })      
      


    return(
      <Spin spinning={props.isLoading}>
          <Table size="small" columns={columns} dataSource={data} />
      </Spin>
    )
}
const mapStateToProps = state => ({
    isLoading: state.review.isLoading,
    reviews: state.review.reviews
  })
  
  const mapDispatchToProps = dispatch => ({
    reviewActions: bindActionCreators(reviewActions, dispatch)
  })
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Reviews))