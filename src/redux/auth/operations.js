import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewUser, setToken } from "../../helpers/api";

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await createNewUser(formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
