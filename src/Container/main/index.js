import React, {isValidElement, useState} from 'react'
import Header from '../../Compan/header'
import Blogs from '../../Compan/blogs'
import Users from '../../Compan/users'
import ToDo from '../../Compan/todo'
import {Link} from 'react-router-dom';
import Signup from '../signup'
function Main() {
    return(
        <div>
            {/* <Blogs/> */}
            {/* <ToDo/> */}
            <Signup/>
        </div>
    )
}

export default Main;


    // const blogs = [
    //     {
    //         title: 'title1',
    //         desc: 'title1title1'
    //     },
    //     {
    //         title: 'title2',
    //         desc: 'title1title2'
    //     },
    //     {
    //         title: 'title3',
    //         desc: 'title1title3'
    //     }
    // ]

    // const [users, setUsers] = useState([
    //     {name: 'Bekzat', age: 20},
    //     {name: 'Dauren', age: 24},
    //     {name: 'Amir', age: 21},
    //     {name: 'Bekarys', age: 25}
    // ])

    // const [isSorted, setIsSorted] = useState(true)
    // const sortUsers = sort => {
    //     const elements = [...users]
    //     if(isSorted)
    //         elements.sort((a,b) => a[sort] > b[sort] ? 1: a[sort] < b[sort] ? -1 : 0)
    //     else
    //         elements.sort((a,b) => a[sort] > b[sort] ? -1: a[sort] < b[sort] ? 1 : 0)
    //     setIsSorted(!isSorted)
    //     setUsers(elements)
    // }