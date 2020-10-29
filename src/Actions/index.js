import {SET_ACTIVE_USER_ID} from '../Constants/action-types'
import {SET_TYPING_VALUE} from '../Constants/action-types'
import {SEND_MESSAGE,DELETE_MESSAGE,EDIT_MESSAGE} from '../Constants/action-types'
export const setActiveUserId = (id) => (
    {
        type : SET_ACTIVE_USER_ID,
        payload: id
    }
)

export const setTypingValue = (value) => (
    {
        type: SET_TYPING_VALUE,
        payload: value
    }
)

export const sendMessage = (message, userId) => (
    {
        type:SEND_MESSAGE,
        payload: {
            message,
            userId
        }
    }
)

export const deleteMessage = (currentNumber, currentUserId) => (
    {
        type:DELETE_MESSAGE,
        payload: {
            currentNumber,
            currentUserId
    }
}
)

export const editMessage = (messagetoEdit,msgNumber, msgUserId) => (
    {
        type:EDIT_MESSAGE,
        payload: {
            messagetoEdit,
            msgNumber,
            msgUserId
    }
}
)