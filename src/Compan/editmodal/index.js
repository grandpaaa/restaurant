import React from 'react'
import {Modal} from 'antd'


function EditModal(props) {
    const {isModalVisible, handleOk, handleCancel, onChange, blog} = props
    return(
        <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
        <form>
            <fieldset>
                <label>
                    title
                </label>
                <input name="title" onChange={onChange} value={blog.title}/>
            </fieldset>
            <fieldset>
                <label>
                    desc
                </label>
                <input name="desc" onChange={onChange} value={blog.desc}/>
            </fieldset>
        </form>
        </Modal>
    )
}

export default ModalItem