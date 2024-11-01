import { configureStore } from "@reduxjs/toolkit"
import { userSlicer } from "@/redux/Slicer/userSlicer"

export const store = configureStore({
  reducer: {
    User: userSlicer.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
