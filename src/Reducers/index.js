import contacts from './contacts'
import user from './user'
import activeUserId from './activeUserId'
import messages from './messages'
import typing from './typing'
import {combineReducers} from 'redux'

export default combineReducers({
        user,
        contacts,
        activeUserId,
        messages,
        typing,

    });