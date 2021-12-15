import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [
            {id: '1', title: 'help me find peach', content: 'blah blah blah'},
            {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
            {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
        ]
    },
    reducers: {
        createProject: (state, action) => {
            state.projects = [...state.projects, action.payload]
            console.log(state.projects)
        }
    }
})

export const { createProject } = projectSlice.actions
export default projectSlice.reducer