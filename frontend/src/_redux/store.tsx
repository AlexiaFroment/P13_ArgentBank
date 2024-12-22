import { configureStore } from "@reduxjs/toolkit"
import userReducer from "@/_redux/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

// Types for use in the project
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
