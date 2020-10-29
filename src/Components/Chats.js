import React, { Component ,useState} from 'react'
import './Chats.css'
import store from '../Store'
import {deleteMessage,editMessage} from '../Actions'
import MessageInput from '../Containers/MessageInput'


const handleDelete = ({number}) => {
    const state = store.getState()
    const { activeUserId } = state
    store.dispatch(deleteMessage(number, activeUserId))
}

function handleEdit({number, text},e)  {
    e.stopPropagation()
     const state = store.getState()
     const { activeUserId } = state
     console.log(text,number,activeUserId);
     store.dispatch(editMessage(text,number, activeUserId))
     
    // setActiveEdit(true)
    // setTextEdit(text)
        
}
// const renderEdit =() => {
//     switch (activeEdit){
//         case true:
//             return <MessageInput value = {textEdit} />
//         default:
//             return null
//     }

// }

const Chat  = ({message, activeUser}) =>{
    // const [activeEdit, setActiveEdit] = useState(false) 
    // const [textEdit,setTextEdit] = useState("")
    const { text , is_user_msg} = message


    const message_Usr = (text1) => {
        if (text1){
            return "is-user-msg"
        }
        else if (text1 == null){
            return "empty"
        }
    }
    const message_Not_Usr = (text1) => {
        if (text1){
            return ""
        }
        else if (text1 == null){
            return "empty"
        }

    }

    return (
        <span className={`Chat ${is_user_msg ? message_Usr(text) : message_Not_Usr(text)}`}>
            <span className="delete"  onClick={handleDelete.bind(null,message)} > <i className="fa fa-trash-o"></i></span>
            <span className="edit"  onClick={handleEdit.bind(null,message)} > <i className="fa fa-edit"></i></span>
            {text}
            
            </span>
    )

}

export default class Chats extends Component {
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
    }


    componentDidMount(){
        this.scrollToBottom()
    }
    componentDidUpdate(){
        this.scrollToBottom()
    }
    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
 
    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map((message)=>(
                    <Chat activeUser= {this.props.activeUser} message = {message} key = {message.number} />
                ))}

            </div>
        )
    }
}

