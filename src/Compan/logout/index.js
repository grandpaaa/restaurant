import React from 'react'
import {Button} from 'antd'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authActions'
import {withRouter} from 'react-router-dom'

function Logout(props) {

    const logoutHandler = () => {
        props.authActions.logout()
    }
    return(
        <a style={{color: '#ffe227'}} onClick={logoutHandler}>Log Out</a>
        // <Button ghost onClick={logoutHandler} style={{display: 'flex', alignItems: 'center'}}>
        //     Log out
        // </Button>
    )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading
})
  
const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Logout))