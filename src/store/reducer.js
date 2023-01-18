import { INBOX_CLOSEGROUPCHAT, INBOX_OPENGROUPCHAT, INBOX_SETGROUPCHAT, POPUP_CLOSEINBOX, POPUP_CLOSEPOPUP, POPUP_CLOSETASK, POPUP_OPENINBOX, POPUP_OPENPOPUP, POPUP_OPENTASK, QUICK_CLOSEQUICK, QUICK_OPENQUICK, TASK_ADDTASKS, TASK_FETCHTASKS } from "./actionType";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  quickOpen: false,
  popupOpen: false,
  taskOpen: false,
  inboxOpen: false,
  groupChatOpen: false,
  tasks: [],
  groupChats: [
    {
      id: 1,
      type: "group",
      name: "109220-Naturalization",
      totalParticipant: 3,
      members: [
        "Claren",
        "Mary Hilda",
        "Obaidullah Amarkhil"
      ],
      Messages: [
        {
          id: 1,
          senderName: "Claren",
          content: "No worries. It will be completed ASAP. I’ve asked him yesterday.",
          createdDate: new Date(),
          isRead: true
        },
        {
          id: 2,
          senderName: "Mary Hilda",
          content: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
          createdDate: new Date(),
          isRead: true
        },
        {
          id: 3,
          senderName: "Claren",
          content: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
          createdDate: new Date(),
          isRead: true
        },
        {
          id: 4,
          senderName: "Mary Hilda",
          content: "Sure thing, Claren",
          createdDate: new Date(),
          isRead: true
        },
        {
          id: 5,
          senderName: "Obaidullah Amarkhil",
          content: "Morning. I’ll try to do them. Thanks",
          createdDate: new Date(),
          isRead: false
        }
      ]
    },
    {
      id: 2,
      type: "dm",
      totalParticipant: 2,
      name: "Fast Visa",
      Messages: [
        {
          id: 1,
          senderName: "Fast Visa",
          content: "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.",
          createdDate: new Date(),
          isRead: true
        },
        {
          id: 2,
          senderName: "Claren",
          content: "Hi, I need help with something can you help me ?",
          createdDate: new Date(),
          isRead: true
        }
      ]
    }
  ],
  groupChat: {}
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
    
    case INBOX_OPENGROUPCHAT:
      return {
        ...state,
        groupChatOpen: true
      }
    
    case INBOX_CLOSEGROUPCHAT:
      return {
        ...state,
        groupChatOpen: false
      }

    case INBOX_SETGROUPCHAT:
      return {
        ...state,
        groupChat: action.payload
      }
  
    default:
      return state
  }
}

export const store = createStore(mainReducer, applyMiddleware(thunk))