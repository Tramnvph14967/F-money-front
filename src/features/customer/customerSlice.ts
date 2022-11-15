import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register } from "../../api/auth";
import { deletelUser, getAllUser } from "../../api/user";
import { userLogin } from "../../models/auth";
export const newUser = createAsyncThunk(
    "auth/newUser", async (formData: userLogin) => {
        const { data } = await register(formData);
        return data
    });
export const getAll = createAsyncThunk(
    "auth/getAllUser", async () => {
        const { data } = await getAllUser();
        return data
    });
export const removeUser = createAsyncThunk(
    "auth/removeUser", async (id : any) => {
        const { data } = await deletelUser(id);
        return data
    });
const authSlice = createSlice({
    name: "auth",
    initialState: {
        values: [],
        loading: false,
        message: ""
    },
    reducers: {
    },
    extraReducers: {
        [newUser.pending]: (state, action) => {
            state.loading = true;
        },
        [newUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.values.push(action.payload)
        },
        [getAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.values = action.payload.users;
        },
        [removeUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.values = state.values.filter(item => item._id !== action.payload._id)
        },
    }
})
export default authSlice.reducer