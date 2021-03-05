import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaranActions from '../../actions/restaranAction'
import * as kitchenActions from '../../actions/kitchenAction'
import {withRouter} from 'react-router-dom'
import './style.css'
import { Modal, Upload, message, Button, Select, Input, Table, Tag, Space, Spin, Image, Rate } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


function Restaran(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Restaran, setRestaran] = useState({
      name: '',
      location: '',
      phone: '',
      amountOfPlace: '',
      image: {},
      averageBill: '',
      kitchens: [],
      rate: 0
    })

    const [file, setFile] = useState({})
    const { Option } = Select;

    const resetrestaran = () => {
      setRestaran({
        name: '',
        location: '',
        phone: '',
        amountOfPlace: 0,
        image: {},
        averageBill: 0,
        kitchens: [],
        rate: 0
      })
    }

    const showModal = () => {
      setIsModalVisible(true);
      props.kitchenActions.getKitchen();
    };
  
    const handleOk = () => {
      props.restaranActions.addRestaran(Restaran)
      console.log(Restaran)
      setIsModalVisible(false);
      resetrestaran();
    };

    const handleCancel = () => {
      setIsModalVisible(false);
      resetrestaran();
    };

    const changeRest = (e) => {
      setRestaran(prev =>  ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }    

    const changeKitchen = (e) => {
      let id = e.map(item => parseInt(item, 10))
      setRestaran(prev =>  ({
        ...prev,
        kitchens: `[${id.toString()}]`
      }))
    }

    const del = (id) => {
      props.restaranActions.delRestaran(id)
    }

    const uploadImage = async options => {
      const { file} = options;
      setFile(file)
      setRestaran({...Restaran, image: file})
    };

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

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id,
          defaultSortOrder: 'ascend'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'AmountOfPlace',
          dataIndex: 'amountOfPlace',
          key: 'amountOfPlace',
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
        },
        {
          title: 'AverageBill',
          dataIndex: 'averageBill',
          key: 'averageBill',
        },
        {
          title: 'Rate',
          dataIndex: 'rate',
          key: 'rate',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => del(record.id)}>Delete</Button>
            </Space>
          ),
        },
      ];

    const data = props.restaran?.restaurants?.map((item, i) => {
      return {
          key: i,
          id: item.id,
          name: item.name,
          image: <Image width={100}  src={'http://37.18.30.124:9000/'+item.image} />,
          location: item.location,
          phone: item.phone,
          amountOfPlace: item.amountOfPlace,
          averageBill: item.averageBill,
          rate: <Rate defaultValue={item.rate} />
      }
    }) 
    const uploadProps = {
      name: 'file',
      customRequest: uploadImage,
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    
    const kitchens = props.kitchens?.map((item, i) => <Option key={item.id}>{item.name}</Option>)

    return(
        
        <Spin spinning={props.isLoading}>
            <Modal title="Add new restaran" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <label>input restaran name</label>
              <Input name="name" onChange={changeRest} value={Restaran.name} class="rest_inp"></Input>
              <label>input restaran location</label>
              <Input name="location" onChange={changeRest} value={Restaran.location} class="rest_inp"></Input>
              <label>input restaran phone</label>
              <Input name="phone" onChange={changeRest} value={Restaran.phone} class="rest_inp"></Input>
              <label>input restaran amountOfPlace</label>
              <Input name="amountOfPlace" onChange={changeRest} value={Restaran.amountOfPlace} class="rest_inp"></Input>
              <label>input restaran image</label>
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              <label>input restaran averageBill</label>
              <Input name="averageBill" onChange={changeRest} value={Restaran.averageBill} class="rest_inp"></Input>
              <label>input restaran kitchens</label>
              <Select mode="tags" style={{ width: '100%' }} onChange={changeKitchen}>
                {kitchens}
              </Select>
              <label>input restaran rate</label>
              <Input name="rate" onChange={changeRest} value={Restaran.rate}></Input>
            </Modal>

            <Button onClick={showModal}>+</Button>
            <Table columns={columns} dataSource={data} pagination={{defaultCurrent: 1, total: 50, onChange: changePage}}/>
        </Spin>
    )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    restaran: state.restaran.restaran,
    kitchens: state.kitchen.kitchen,
    total: state.restaran.total,
    pageSize: state.restaran.pageSize,
})

const mapDispathToProps = dispatch => ({
    restaranActions: bindActionCreators(restaranActions, dispatch),
    kitchenActions: bindActionCreators(kitchenActions, dispatch),
})


export default connect(mapStateToProps, mapDispathToProps)(withRouter(Restaran))