import React from 'react'

function Rests(props) {
    const title = new URLSearchParams(props.location.search).get('title');
    console.log(title)
    // useEffect(() => {
    //     props.restaranActions.getRestaran({
    //         query: query
    //     })
    // })
    // const restorans = props.restaran.restaurants
    return (
        <div style={{width: '100%', padding: '20vh'}}>
            <p>aasfasf</p>
        </div>
    )
}

export default Rests