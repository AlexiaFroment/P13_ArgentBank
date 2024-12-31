import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  email: string;
  token: string | null;
};

const initialState: AuthState = {
  email: "",
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;

      // Sauvegarder dans le localStorage
      localStorage.setItem("email", action.payload.email);
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },

    logout: (state) => {
      state.email = "";
      state.token = null;

      // Effacer les données du localStorage
      localStorage.removeItem("email");
      localStorage.removeItem("token");
    },

    loadAuthState: (state) => {
      // Charger les données du localStorage
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");

      if (email && token) {
        state.email = email;
        state.token = token;
      }
    },
  },
});

export const { login, logout, loadAuthState } = authSlice.actions;
export default authSlice.reducer;
