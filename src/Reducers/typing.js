import {SET_TYPING_VALUE,SEND_MESSAGE,EDIT_MESSAGE} from '../Constants/action-types'
import _ from 'lodash'

export default function typing (state = "", action) {
    switch (action.type){
        case SET_TYPING_VALUE:
            return action.payload
        case SEND_MESSAGE:
            return ""
        case EDIT_MESSAGE:
            let {messagetoEdit} = action.payload;
            let message = (messagetoEdit.lastIndexOf("[edited]")!==-1) ? messagetoEdit.replace("[edited]",""):messagetoEdit
            return message;
        default:
            return state
    }
}