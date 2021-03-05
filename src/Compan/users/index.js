import React, {isValidElement, useState} from 'react'

function Users({users, sortUsers}) {

    const userItems = users.map((item, i) => <tr key={i}>
        <td>{item.name}</td>
        <td>{item.age}</td>
    </tr>)
    return(
        <table border="1">
            <thead>
                <tr>
                    <th>Имя <button onClick={() => sortUsers('name')}>sort</button></th>
                    <th>Возраст <button onClick={() => sortUsers('age')}>sort</button></th>
                </tr>
            </thead>
            <tbody>
                {userItems}
            </tbody>
        </table>
    )
}

export default Users;