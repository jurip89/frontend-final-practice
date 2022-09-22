import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import spacesReducer from './spaces/slice';
import storiesReducer from './stories/slice'  
export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    spaces:spacesReducer,
    stories:storiesReducer
  },
});