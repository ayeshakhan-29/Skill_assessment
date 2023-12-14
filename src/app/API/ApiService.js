import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800/api",
});

export const getTasks = async () => await api.get("/todo");
export const getTask = async (id) => await api.get(`/todo/${id}`);
export const postTask = async (title) => await api.post("/todo", { title });
export const updateTask = async (id, isComplete) =>
  await api.put(`/todo/${id}`, { isComplete });
export const deleteTask = async (id) => await api.delete(`/todo/${id}`);
