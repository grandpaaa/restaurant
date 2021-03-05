import React, {isValidElement, useState} from 'react'
import {Input} from 'antd'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, withRouter} from 'react-router-dom'
import './header.css'
import * as authActions from '../../actions/authActions'
import Logout from '../logout'

const {Search} = Input

function Header() {
    const onSearch = (query) => {
        window.location.href = `/search?query=${query}`
    }
    const upin = <a style={{color: '#ffe227'}} href="/signup">Sign up/Sign in</a>
    return(
        <div class="header">
            <header style={{alignItems: 'center', background: '#110a06'}}>
                <div class="logo"><a href="/mainpage"><img src="https://livedemo00.template-help.com/wt_prod-12864/images/logo.png"/></a></div>
                <nav>
                    <ul>
                        <li><a href="/mainpage">Main</a></li>
                        <li><a href="/about">About us</a></li>
                        {localStorage['token'] ? <li><a href="/favorites">Favorites</a></li> : ''}
                        <li><a href="/restarans">Restaurants</a></li>
                        {localStorage['token'] ? <li><a href="/orders">Orders</a></li> : ''}
                        <li>{localStorage['token'] ? <Logout/> : upin}</li>
                    </ul>
                </nav>
                <div>
                    <Search placeholder="поиск" onSearch={onSearch}/>
                </div>
            </header>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading
})

const mapDispathToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Header))