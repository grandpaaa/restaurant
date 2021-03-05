import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {Route, Link} from 'react-router-dom';
import Kitchen from '../kitchen';
import Restaran from '../restaran';
import Reviews from '../reviews';
import Order from '../order'
import * as authActions from '../../actions/authActions'
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';


const { Header, Sider, Content } = Layout;

function Dashboard() {
    return (
      localStorage['role'] == 'admin' ?
        <Layout style={{height: '150vh'}}>
          <Sider trigger={null} collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to='/dashboard/kitchen'>
                kitchen
              </Link>    
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <Link to='/dashboard/restaran'>
                restaran
              </Link>  
              </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to='/dashboard/reviews'>
                reviews
              </Link>
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}></Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Route exact path='/dashboard/kitchen' component={Kitchen}/>
              <Route exact path='/dashboard/restaran' component={Restaran}/>
              <Route exact path='/dashboard/reviews' component={Reviews}/>
            </Content>
          </Layout>
        </Layout>
        :
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
            <h1>You are not authorized to enter this page!!!</h1>
            <a href="/signin">Please log in</a>
        </div>
      );
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading
})

const mapDispathToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Dashboard))