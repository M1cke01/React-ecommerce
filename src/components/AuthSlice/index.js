import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
};

const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('isAuthenticated', 'true');
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('isAuthenticated');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;