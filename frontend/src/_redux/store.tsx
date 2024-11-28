import { configureStore } from "@reduxjs/toolkit"
import userReducer from "@/_redux/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer, // Ici, on ajoutera les slices plus tard
  },
})

// Types pour l'utilisation dans tout le projet
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
