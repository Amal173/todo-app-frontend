import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    tasks: [],
    taskType: [],
    showAddTaskModal: false,
    showSecurityPinModal: false,

}

export const fetchAsyncTasks = createAsyncThunk('task/fetchAsyncTasks', async () => {
    const response = await axios.get(`http://localhost:8080/api/task`);
    console.log("response data get task", response);
    return response.data;
});

export const fetchAsyncCreateTasks = createAsyncThunk('task/fetchAsyncCreateTasks', async ({ list }) => {
    console.log(list);
    const response = await axios.post(`http://localhost:8080/api/task`, { list });
    console.log("response data get task", response);
    return response.data;
});


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        taskType: (state, { payload }) => {
            state.taskType.push(payload)
        },
        showtaskmodal: (state, { payload }) => {
            state.showAddTaskModal = payload
        },
        showSecurityModal: (state, { payload }) => {
            state.showSecurityPinModal = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncTasks.fulfilled, (state, { payload }) => {
            state.tasks = payload;
        });

    },


});


export const { taskType, showtaskmodal, showSecurityModal } = taskSlice.actions;

export default taskSlice.reducer;