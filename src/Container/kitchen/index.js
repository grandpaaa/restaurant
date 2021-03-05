import React, {useEffect, useState} from 'react';
import {Modal, Input, Table, Tag, Space, Button, Spin, Form} from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as kitchenActions from '../../actions/kitchenAction'
import {withRouter, Link} from 'react-router-dom'

function Kitchen(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Kitchen, setKitchen] = useState({name: ''})
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [editId, setEditId] = useState(null);
    const showModal = () => {
      resetkitchen()
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      props.kitchenActions.addKitchen(Kitchen)
      setIsModalVisible(false);
    };
  
    const handleOkk = () => {
      props.kitchenActions.editKitchen(Kitchen, editId)
      setModalEditVisible(false);
    };

    const resetkitchen = () => {
      setKitchen({name: ''})
    }

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handleCancell = () => {
      setModalEditVisible(false);
    };

    const del = (id) => {
      console.log(id);
      props.kitchenActions.delKitchen(id)
    }
    const edit = (id) => {
      setModalEditVisible(true);
      setEditId(id);
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => edit(record.id)}>edit</Button>
              <Button onClick={() => del(record.id)}>Delete</Button>
            </Space>
          ),
        },
      ];
      const data = props.kitchen.map((item, i) => {return{
        key: i,
        id: item.id,
        name: item.name
    }})
      useEffect(() => {
        props.kitchenActions.getKitchen()
      }, [])

      const handleChange = (e) => {
        setKitchen(prev =>  ({
          ...prev,
          [e.target.name]: e.target.value
        }))
      }



    return(
        
        <Spin spinning={props.isLoading}>
            <Modal title="Add new kitchen" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <label>input kitchen</label>
              <Input name="name" onChange={handleChange} value={Kitchen.name}></Input>
            </Modal>
            <Modal title="Edit kitchen" visible={modalEditVisible} onOk={handleOkk} onCancel={handleCancell}>
              <label>input kitchen</label>
              <Input name="name" onChange={handleChange} value={Kitchen.name}></Input>
            </Modal>

            <Button onClick={showModal}>+</Button>
            <Table columns={columns} dataSource={data} />
        </Spin>
    )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    kitchen: state.kitchen.kitchen,
})

const mapDispathToProps = dispatch => ({
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Kitchen));