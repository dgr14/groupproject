import React from 'react'
import { withContext } from "./AppContext"
import Styles from './UserInfo.module.css'

function UserInfo(props) {
    return (
        <div>
            <h5>Username: {props.user.username}</h5>
        </div>
    )
}

export default withContext(UserInfo)
