import { createSlice } from "@reduxjs/toolkit"

export let userSlice = createSlice({
    name: 'adduser',
    initialState: {
        name: '',
        uname: '',
        email: '',
        arr: [],
        updateData_index: '',
        data_status: false
    },
    reducers: {
        submit: (state) => {
            let obj = {
                objectName: state.name,
                objectUname: state.uname,
                objectEmail: state.email
            }
            if (!state.data_status) {
                state.arr.push(obj)
            }
            else {
                state.arr[state.updateData_index] = obj
                state.data_status = false
            }
            state.name = ''
            state.uname = ''
            state.email = ''
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setUname: (state, action) => {
            state.uname = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        updateData: (state, action) => {
            console.log(action.payload);
            state.data_status = true
            state.updateData_index = action.payload
            state.name = state.arr[action.payload].objectName
            state.uname = state.arr[action.payload].objectUname
            state.email = state.arr[action.payload].objectEmail
        },
        deleteData: (state, action) => {
            state.arr = state.arr.filter((val, index) =>
                index == action.payload ? null : val
            )
        }
    }
})
export default userSlice.reducer;
export const { submit, setName, setUname, setEmail, updateData, deleteData } = userSlice.actions;
