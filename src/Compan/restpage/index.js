import React from 'react'
import {Card, Pagination, Rate} from 'antd'

const {Meta} = Card;

function RestPage(props) {
    const {restorans, changePage} = props
    const restMore = (item) => {
        window.location.href = `/restmore/?id=${item}`
    }
    const allRests = restorans?.map((item, i) => (
        <div key={i} onClick={() => restMore(item.id)}>
            <Card
                hoverable
                style={{width: '300px', height: '320px', background: '#557174', margin: '20px'}}
                cover={<img src={'http://37.18.30.124:9000/'+item.image} style={{width: '300px', height: '200px'}}/>}
            >
                <Meta title={item.name} description={item.location + ', ' + item.phone}/>
                <Rate value={item.rate} disabled></Rate>
            </Card>
        </div>
    ))
    
    return (
        <div style={{width: '100%', padding: '20vh'}}>
            <div>
                <h1 style={{fontSize: '40px', textAlign: 'center'}}>Restorans</h1>
                <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>{allRests}</div>
                <Pagination defaultCurrent={1} total={parseInt(props.total)} pageSize={parseInt(props.pageSize)} onChange={changePage}/>
            </div>
        </div>
    )
}

export default RestPage