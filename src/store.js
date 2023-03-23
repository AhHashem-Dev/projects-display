import { configureStore } from "@reduxjs/toolkit";
import interfaceSlice from "./features/interfaceSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    interface: interfaceSlice,
    user: userSlice,
  },
});

export default store;
