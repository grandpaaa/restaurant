import React from 'react'
import {Card, Rate} from 'antd';
import Footer from '../footer'

const {Meta} = Card;

function SearchPage(props) {
    const {restorans, name} = props
    const restorans_search = restorans?.map((item, i) => (
        <div key={i}>
            <Card
                hoverable
                style={{width: '500px', height: '600px', boxShadow: '0px 0 10px rgba(0, 0, 0, 0.5)'}}
                cover={<img src={'http://37.18.30.124:9000/'+item.image} style={{width: '500px', height: '300px', objectFit: 'cover'}}/>}
            >
                <Meta title={item.name} description={item.location}/>
            </Card>
        </div>
    ))
    if(!restorans_search)console.log(1)
    return (
        <div class="rests">
            <div style={{width: '100%', padding: '15vh', minHeight:'100vh'}}>
                <div>
                    <h1 style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}}>Search Result: "{name}"</h1>
                    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>{restorans_search}</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SearchPage