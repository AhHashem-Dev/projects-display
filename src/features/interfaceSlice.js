import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarOpen: false,
  isSidebarOpen: false,
  theme: "light",
};

const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export default interfaceSlice.reducer;

export const { toggleNavbar, toggleSidebar, toggleTheme } =
  interfaceSlice.actions;
