import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [],
};

initialState.projects.forEach(project => {
    project.tasks = [];
});

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        addTaskToProject: (state, action) => {
            const { projectId, newTask } = action.payload;
            const project = state.projects.find(project => project.project_id === projectId);
            if (project) {
                if (!project.hasOwnProperty('tasks')) {
                    project.tasks = [];
                }
                project.tasks.push(newTask);
            }
        },
    },
});

export const { setProjects, addTaskToProject } = projectSlice.actions;

export default projectSlice.reducer;
