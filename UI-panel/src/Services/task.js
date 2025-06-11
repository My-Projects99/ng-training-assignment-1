import axios from "axios";

const BASE_URL = "http://localhost:8080/api/task";

export const getTaskList = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const deleteTaskById = async (taskId) => {
  const response = await axios.delete(`${BASE_URL}/${taskId}`);
  return response.data;
};


export const addTask = (task) => {
  return axios.post('http://localhost:8080/api/task', task).then(res => res.data);
};

export const getTaskById = (id) => {
    return axios.get(`${BASE_URL}/${id}`).then(res => res.data);
}
export const updateTask = (id, task) => {
    return axios.put(`${BASE_URL}/${id}`, task).then(res => res.data);
}
