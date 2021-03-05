import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions'
import {withRouter, Link} from 'react-router-dom'
import './style.css'
import Header from '../../Compan/header'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

  

function Signup(props) {
    console.log(props)
    const onFinish = values => {
        console.log('Success:', values);
        props.authActions.signup(values);
        props.history.push('/signin')
    };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    
    return(
      <div className="form_up">
        <Header/>
          <div className="f_up">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <p style={{color: '#fff', textAlign: 'center', fontSize: '80px', lineHeight: '20px' ,fontFamily: 'Dancing Script'}}>Sign Up</p>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your username!'}]}
              >
                <Input placeholder="Input your name" style={{width: 300, }}/>
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Input your email" style={{width: 300}}/>
              </Form.Item>
        
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Input your password" style={{width: 300}}/>
              </Form.Item>
        
              <Link to='/signin' style={{display:'flex', justifyContent:'center', alignItems:'center', color: '#fff', fontWeight:'bold',textAlign: 'center', marginBottom: '30px'}}>Already have an account?</Link>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" style={{padding: '20px 30px', display:'flex', alignItems: 'center' ,background: '#1e212d', border: 'none', fontWeight: 'bold', letterSpacing: '1px'}}>
                  submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    isAuth: state.auth.isAuth,
})

const mapDispathToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Signup));