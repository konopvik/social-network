import React from "react";
import s from './../Dialogs.module.css'



const Message = (props) => {

    let newMessageToSend = React.createRef()

    let sendMessage = () => {
        let text = newMessageToSend.current.value;
        alert(text)
    }

    return (
        <div className={s.message}>
            <div ref={newMessageToSend}>{props.message}</div>

        </div>

    )
}



export default Message