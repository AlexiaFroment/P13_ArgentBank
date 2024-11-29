import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "@/_interfaces/Interface"

type UserState = Pick<User, "firstName" | "lastName">

const initialState: UserState = {
  firstName: "",
  lastName: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    clearUser(state) {
      state.firstName = ""
      state.lastName = ""
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
