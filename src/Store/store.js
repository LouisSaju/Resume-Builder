import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./Reducers/ResumeReducer";

export default configureStore({ reducer: { resumeForm: resumeReducer } });
