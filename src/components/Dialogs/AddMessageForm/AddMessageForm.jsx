import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLengthCreator(50)]}
                       name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)


export default AddMessageFormRedux