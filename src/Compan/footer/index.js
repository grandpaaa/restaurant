import React, {isValidElement, useState} from 'react'
import {Link} from 'react-router-dom'
import './style.css'


function Footer() {
    return(
        <div class="footer">
            <div style={{textAlign: 'center'}}><a href="/mainpage"><img src="https://livedemo00.template-help.com/wt_prod-12864/images/logo.png"/></a></div>
            <h4>Venice Restaurant © 2021 . Privacy Policy</h4>
        </div>
    )
}

export default Footer

