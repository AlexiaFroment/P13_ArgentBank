import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstName: "",
  lastName: "",
}

export const userSlicer = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
  },
})
