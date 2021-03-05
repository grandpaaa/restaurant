import React, {useState} from 'react'
import Blog from '../blog'
import ModalItem from '../modal'
import {Button} from 'antd'

function Blogs() {
    
    const [blog, setBlog] = useState({
        title: '',
        desc: ''
    })
    const [blogs, setBlogs] = useState([
        {
            title: 'title1',
            desc: 'title1title1'
        },
        {
            title: 'title2',
            desc: 'title1title2'
        },
        {
            title: 'title3',
            desc: 'title1title3'
        }
    ])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleOpenModal = () => {
        resetBlog()
        setIsModalVisible(true);
    }
    const handleCloseModal = () => {
        setIsModalVisible(false)
    }
    const onChange = e => {
        console.log(e.target.value)
        setBlog(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleAdd = () => {
        setBlogs([...blogs, blog])
        handleCloseModal()
    }

    const resetBlog = () =>{
        setBlog({title:'', desc:''})
    }

    const del = (i) => {
        console.log(i)
        blogs.splice(i.id, 1)
        // blogs.filter((item,i) => blogs[i.id]!=item);
        setBlogs([...blogs])
    }

    const edit = () => {
        resetBlog()
        setIsModalVisible(true);
    }

    const blogItems = blogs.map((item, i) => <Blog edit={edit} del={del} id={i} key={i} title={item.title} desc={item.desc}/>)

    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }

    return(
        <div>
            <div style={style}>
                {blogItems}
            </div>
            <div>
                <Button type="primary" onClick={handleOpenModal}>Add block</Button>
                <ModalItem
                    blog={blog}
                    onChange={onChange}
                    isModalVisible={isModalVisible}
                    handleOk={handleAdd}
                    handleCancel={handleCloseModal}/>
            </div>
        </div>
    )
}

export default Blogs