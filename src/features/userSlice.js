import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import airTable from "../utils/axios";

const initialState = {
  username: "",
  notes: undefined,
  recordId: "",
  globalNotes: [],
  myGlobalNotes: [],
  globalId: "",
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.username = payload;
    },
    setLoadingTrue: (state) => {
      state.isLoading = true;
    },
    setLoadingFalse: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (!payload) {
          return;
        }
        const {
          id,
          fields: { notes },
        } = payload;
        state.recordId = id;
        state.notes = JSON.parse(notes);
      })
      .addCase(fetchGlobalNotes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (!payload) {
          return;
        }
        const {
          id,
          fields: { notes },
        } = payload;
        state.globalId = id;
        state.globalNotes = JSON.parse(notes);
        state.myGlobalNotes = JSON.parse(notes).filter((note) => {
          return note.author === state.username;
        });
      });
  },
});

export const fetchNotes = createAsyncThunk(
  "user/fetchNotes",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());
    try {
      const response = await airTable("?view=DB");
      return response.data.records.find((record) => {
        return record.fields.username == thunkAPI.getState().user.username;
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateNote = createAsyncThunk(
  "user/updateNote",
  async (text, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());
    console.log({
      id: thunkAPI.getState().user.recordId,
      fields: {
        username: thunkAPI.getState().user.username,
        notes: JSON.stringify([
          ...thunkAPI.getState().user.notes,
          { text: text },
        ]),
      },
    });
    try {
      const response = await airTable.put(
        "",
        {
          records: [
            {
              id: thunkAPI.getState().user.recordId,
              fields: {
                username: thunkAPI.getState().user.username,
                notes: JSON.stringify([
                  ...thunkAPI.getState().user.notes,
                  { text: text },
                ]),
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    thunkAPI.dispatch(fetchNotes());
  }
);

export const createUser = createAsyncThunk(
  "user/createNote",
  async (text, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());
    try {
      console.log("rabbit");
      const response = await airTable.post(
        "",
        {
          records: [
            {
              fields: {
                username: thunkAPI.getState().user.username,
                notes: `[{"text":"${text}"}]`,
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    thunkAPI.dispatch(fetchNotes());
  }
);

export const removeNote = createAsyncThunk(
  "user/removeNote",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());
    const tempNotes = [...thunkAPI.getState().user.notes];
    tempNotes.splice(id, 1);
    try {
      const response = await airTable.put(
        "",
        {
          records: [
            {
              id: thunkAPI.getState().user.recordId,
              fields: {
                username: thunkAPI.getState().user.username,
                notes: JSON.stringify(tempNotes),
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    thunkAPI.dispatch(fetchNotes());
  }
);

export const fetchGlobalNotes = createAsyncThunk(
  "user/fetchGlobalNotes",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());
    try {
      const response = await airTable("?view=DB");
      return response.data.records.find((record) => {
        return record.fields.username == "GlobalHotion";
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateGlobalNote = createAsyncThunk(
  "user/updateGlobalNote",
  async (text, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());
    try {
      const response = await airTable.put(
        "",
        {
          records: [
            {
              id: thunkAPI.getState().user.globalId,
              fields: {
                username: "GlobalHotion",
                notes: JSON.stringify([
                  ...thunkAPI.getState().user.globalNotes,
                  { text: text, author: thunkAPI.getState().user.username },
                ]),
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    thunkAPI.dispatch(fetchGlobalNotes());
  }
);

export const removeGlobalNote = createAsyncThunk(
  "user/removeGlobalNote",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());
    const tempNotes = [...thunkAPI.getState().user.myGlobalNotes];
    tempNotes.splice(id, 1);
    try {
      const response = await airTable.put(
        "",
        {
          records: [
            {
              id: thunkAPI.getState().user.globalId,
              fields: {
                username: "GlobalHotion",
                notes: JSON.stringify(tempNotes),
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    thunkAPI.dispatch(fetchGlobalNotes());
  }
);

export default userSlice.reducer;

export const { updateUser, setLoadingFalse, setLoadingTrue } =
  userSlice.actions;
