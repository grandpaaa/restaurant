import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaranActions from '../../actions/restaranAction'
import {withRouter} from 'react-router-dom'
import Header from '../../Compan/header'
import SearchPage from '../../Compan/searchpage'


function Search(props) {
    const query = new URLSearchParams(props.location.search).get('query');

    const onSearch = (query) => {
        window.location.href = `/search?query=${query}`
    }
    
    useEffect(() => {
        props.restaranActions.getRestaran({
            query: query
        })
    })
    const restorans = props.restaran.restaurants
    return(
        <div style={{width: '100%'}}>
            <Header onSearch={onSearch}/>
            <SearchPage restorans={restorans} name={query}/>
        </div>
        
    )
}
const mapStateToProps = state => ({
    isLoading: state.restaran.isLoading,
    restaran: state.restaran.restaran
  })
  
const mapDispatchToProps = dispatch => ({
    restaranActions: bindActionCreators(restaranActions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Search))