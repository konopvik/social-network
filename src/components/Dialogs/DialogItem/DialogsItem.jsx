import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink to={path}>
                <img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912642/avatar-icon-md.png'/>
                {props.name}</NavLink>
        </div>
    )
}


export default DialogItem