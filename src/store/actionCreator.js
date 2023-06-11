import axios from "axios";
import { baseUrl } from "../baseUrl";
import { INBOX_CLOSEGROUPCHAT, INBOX_OPENGROUPCHAT, INBOX_SETGROUPCHAT, POPUP_CLOSEINBOX, POPUP_OPENINBOX, TASK_ADDTASKS, TASK_FETCHTASKS } from "./actionType";

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const { data } = await axios({
      url: `${baseUrl}/tasks`,
      method: 'GET',
    })
    const tasks = data.slice(0, 5).map(el => {
      const dueDate = new Date(el.dueDate)

      el.dueDate = dueDate
      return el
    })

    dispatch({
      type: TASK_FETCHTASKS,
      payload: data
    })
    return data
  }
}

export const editTask = (idx, newTask) => {
  return (dispatch, getState) => {
    const { tasks } = getState()
    const newTaskArray = tasks.map((task, index) => {
      if(index === idx) return newTask
      return task
    })

    dispatch({
      type: TASK_FETCHTASKS,
      payload: newTaskArray
    })
    return tasks
  }
}

export const deleteTask = (idx) => {
  return async (dispatch, getState) => {
    const { tasks } = getState()
    const newTaskArray = []
    tasks.forEach((task, index) => {
      if(index !== idx) newTaskArray.push(task)
    })

    dispatch({
      type: TASK_FETCHTASKS,
      payload: newTaskArray
    })
  }
}

export const openGroupChat = (groupChat) => {
  return async (dispatch, getState) => {
    dispatch({
      type: INBOX_SETGROUPCHAT,
      payload: groupChat
    })
    dispatch({
      type: POPUP_CLOSEINBOX
    })
    dispatch({
      type: INBOX_OPENGROUPCHAT
    })
  }
}

export const closeGroupChat = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: INBOX_CLOSEGROUPCHAT
    })
    dispatch({
      type: POPUP_OPENINBOX
    })
  }
}