import {getMessages} from '../static-data'
import {SEND_MESSAGE,DELETE_MESSAGE,EDIT_MESSAGE} from '../Constants/action-types'
import _ from 'lodash'

export default function messages(state = getMessages(10), action ){
    switch (action.type) {
        case SEND_MESSAGE:
          const { message, userId } = action.payload;
          const allUserMsgs = state[userId];
          const arrayView = _.values(allUserMsgs);
          const editedTrue = arrayView.filter(item=>{
            return item.edited === true;
          });
          let number;
          var messageToWrite;
          if(editedTrue.length===0){
             number = +_.keys(allUserMsgs).pop() + 1;
             messageToWrite = message;
          }
          else{
            number = editedTrue[0].number;
            messageToWrite = message + " [edited]"
          }
          var userMessage = message.endsWith("-f") ? false:true;
    
          return {
            ...state,
            [userId]: {
              ...allUserMsgs,
              [number]: {
                number,
                text: messageToWrite.replace(" -f",""),
                is_user_msg: userMessage,
                edited:false,
              }
            }
          };

        case DELETE_MESSAGE:
            const {currentNumber, currentUserId} = action.payload;
            const prevUserMsgs = state[currentUserId];

            return{
                ...state,
                [currentUserId] :{
                    ...prevUserMsgs,
                    [currentNumber]: _.filter(currentUserId.number, i => i !== currentNumber)
                }
                
            }
        
            case EDIT_MESSAGE:
              const { messagetoEdit,msgNumber, msgUserId} = action.payload;
              const usgMsgs = state[msgUserId];

              return{
                ...state,
                [msgUserId]: {
                  ...usgMsgs,
                  [msgNumber]: {
                    number: +msgNumber,
                    text : messagetoEdit,
                    is_user_msg: true,
                    edited:true,
                  }
                }

              }
    
        default:
          return state;
      }
}