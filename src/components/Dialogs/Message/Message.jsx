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
            <textarea ref={newMessageToSend}>{props.message}</textarea>
            <button onClick={ sendMessage }>Send</button>
        </div>

    )
}



export default Message