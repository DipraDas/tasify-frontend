import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/counter/counter'
import projectReducer from '../Redux/projects/projects'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        project: projectReducer
    },
    middleware:
        getDefaultMiddleware =>
            getDefaultMiddleware({ serializableCheck: false })
})