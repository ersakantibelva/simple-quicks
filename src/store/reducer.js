import { POPUP_CLOSEINBOX, POPUP_CLOSEPOPUP, POPUP_CLOSETASK, POPUP_OPENINBOX, POPUP_OPENPOPUP, POPUP_OPENTASK, QUICK_CLOSEQUICK, QUICK_OPENQUICK, TASK_ADDTASKS, TASK_FETCHTASKS } from "./actionType";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  quickOpen: false,
  popupOpen: false,
  taskOpen: false,
  inboxOpen: false,
  chatroomOpen: false,
  tasks: []
}

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case QUICK_OPENQUICK:
      return {
        ...state,
        quickOpen: true
      }

    case QUICK_CLOSEQUICK:
      return {
        ...state,
        quickOpen: false
      }
    
    case POPUP_OPENPOPUP:
      return {
        ...state,
        popupOpen: true
      }

    case POPUP_CLOSEPOPUP:
      return {
        ...state,
        popupOpen: false
      }

    case POPUP_OPENTASK:
      return {
        ...state,
        taskOpen: true,
        inboxOpen: false
      }
    
    case POPUP_CLOSETASK:
      return {
        ...state,
        taskOpen: false
      }

    case POPUP_OPENINBOX:
      return {
        ...state,
        inboxOpen: true,
        taskOpen: false
      }
    
    case POPUP_CLOSEINBOX:
      return {
        ...state,
        inboxOpen: false
      }

    case TASK_FETCHTASKS:
      return {
        ...state,
        tasks: action.payload
      }
    
    case TASK_ADDTASKS:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }
  
    default:
      return state
  }
}

export const store = createStore(mainReducer, applyMiddleware(thunk))