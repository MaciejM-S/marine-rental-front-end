import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../baseUrl";

export type InitialState = {
  authenticated: boolean;
  _id: null | string;
  firstName: null | string;
  lastName: null | string;
  email: null | string;
  telephone: null | string;
  avatar: null | {
    data: string | null;
    date: Date | null;
    blob: Blob | null | File;
  };
  error: null | string;
  loading: boolean;
  updated: boolean;
  incorrectPass: boolean;
};

export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  () => {
    return fetch(baseUrl+"/authenticate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {});
  }
);

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  (file: File) => {
    let fd = new FormData();
    fd.append("image", file, file.name);
    return fetch(baseUrl+"/updateAvatar", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        return file;
      })
      .catch((error) => {});
  }
);

export const updateInfo = createAsyncThunk(
  "user/updateInfo",
  (info: {
    firstName: string | null;
    lastName: string | null;
    telephone: string | null;
  }) => {
    return fetch(baseUrl+"/updateInfo", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "uploaded") {
          return { info: data.info, message: "uploaded" };
        } else throw new Error("not uploaded");
      })
      .catch((error) => {
        return error.message;
      });
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  (passwords: { currentPass: string; newPass: string }) => {
    return fetch(baseUrl+"/updatePassword", {
      method: "POST",
      body: JSON.stringify(passwords),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "updated") {
          return "updated";
        } else if (data.message === "incorrect") {
          return "incorrect";
        } else {
          throw new Error("Password not updated");
        }
      })
      .catch((error) => {
        return error.message;
      });
  }
);

const initialState: InitialState = {
  authenticated: false,
  _id: null,
  firstName: null,
  lastName: null,
  email: null,
  telephone: null,
  avatar: null,
  error: null,
  loading: false,
  updated: false,
  incorrectPass: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticated: (state, action: PayloadAction<boolean>) => {
      return { ...state, authenticated: action.payload };
    },
    logged: (state, action: PayloadAction<InitialState>) => {
      const newPayload = action.payload;
      return {
        ...state,
        authenticated: true,
        _id: newPayload._id,
        firstName: newPayload.firstName,
        lastName: newPayload.lastName,
        email: newPayload.email,
        telephone: newPayload.telephone,
        avatar: newPayload.avatar,
      };
    },
    loggedOut: () => {
      return { ...initialState };
    },
    closed: (state) => {
      return { ...state, updated: false };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {});
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.authenticated = true;
      state._id = action.payload._id;
      state.avatar =action.payload.user&&action.payload.user.avatar
        ? action.payload.user.avatar
        : null;
      state.firstName = action.payload.user.info.firstName;
      state.lastName = action.payload.user.info.lastName;
      state.email = action.payload.user.email;
      state.telephone = action.payload.user.telephone
        ? action.payload.user.telephone
        : null;
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      // state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(updateAvatar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      updateAvatar.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (state && state.avatar) {
          state.avatar.blob = action.payload;
        }
        state.loading = false;
      }
    );
    builder.addCase(updateAvatar.rejected, (state, action) => {
      state.error = action.error.message || "Something went wrong";
      state.loading = false;
    });
    builder.addCase(updateInfo.pending, (state) => {
      state.loading = true;
      state.updated = false;
    });
    builder.addCase(updateInfo.fulfilled, (state, action) => {
      if (action.payload.message === "uploaded") {
        state.firstName = action.payload.info.firstName;
        state.lastName = action.payload.info.lastName;
        state.telephone = action.payload.info.telephone;
        state.updated = true;
      }
      state.loading = false;
    });
    builder.addCase(updateInfo.rejected, (state, action) => {
      state.error = action.error.message || "Something went wrong";
      state.loading = false;
      state.updated = false;
    });
    builder.addCase(updatePassword.pending, (state) => {
      state.loading = true;
      state.updated = false;
      state.incorrectPass = false;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      if (action.payload === "updated") {
        state.updated = true;
        state.incorrectPass = false;
        state.loading = false;
      } else if (action.payload === "incorrect") {
        state.incorrectPass = true;
        state.loading = false;
      }
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.error = action.error.message || "something went wrong";
      state.loading = false;
      state.updated = false;
      state.incorrectPass = false;
    });
  },
});
export default userSlice.reducer;
export const { logged, authenticated, loggedOut, closed } = userSlice.actions;
