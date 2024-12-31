import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/_interfaces/Interface";

type UserState = Pick<User, "firstName" | "lastName">;

// Initialisation depuis le localStorage
const storedUser = localStorage.getItem("user");
const initialState: UserState = storedUser
  ? JSON.parse(storedUser)
  : { firstName: "", lastName: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;

      // Sauvegarder dans le localStorage
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
