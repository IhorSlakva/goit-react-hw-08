import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const createNewUser = async (formData) => {
  const data = await instance.post("/users/signup", formData);
  return data;
};

export const fetchContacts = async () => {
  const data = await instance.get("/contacts");
  return data;
};

export const addContact = async (newContact) => {
  const data = await instance.post("/contacts", newContact);
  return data;
};

export const deleteContact = async (contactId) => {
  const data = await instance.delete(`/contacts/${contactId}`);
  return data;
};
