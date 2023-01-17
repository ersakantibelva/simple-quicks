import axios from "axios";
import { baseUrl } from "../baseUrl";
import { TASK_FETCHTASKS } from "./actionType";

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const { data } = await axios({
      url: `${baseUrl}/todos`,
      method: 'GET',
    })
    const tasks = data.slice(0, 5).map(el => {
      let start = new Date(2023, 0, 16)
      let end = new Date(2023, 0, 20)

      const dueDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
      const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      el.dueDate = dueDate
      el.description = description
      return el
    })
    dispatch({
      type: TASK_FETCHTASKS,
      payload: tasks
    })
    return tasks
  }
}