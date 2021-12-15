import { configureStore } from "@reduxjs/toolkit";

import projectReducer from "./projectReducer";

export default configureStore({
    reducer: {
        project: projectReducer
    }
})