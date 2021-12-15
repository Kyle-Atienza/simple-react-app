import React from 'react'

const DisplayUser = ({lists, deleteUser}) => {
    const userList = lists.map(user => {
        if (user.age >= 20){
            return(
                <div className="react-one" key={user.id}>
                    <div className="">Name: {user.name}</div>
                    <div className="">Age: {user.age}</div>
                    <div className="">Favorite: {user.favorite}</div>
                    <button onClick={ () => {deleteUser(user.id)} }>Delete User</button>
                </div>
            )
        } else {
            return null
        }
    })
    return(    
        <div className="user-list">
            { userList } 
        </div>
    )
}

export default DisplayUser