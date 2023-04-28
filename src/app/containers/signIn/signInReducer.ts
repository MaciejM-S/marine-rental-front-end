const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
type FeatureActions = {
  type: string;
  payload: string;
};
export type FeatureState = {
  email: string;
  password: string;
  errors: {
    emailErr: null | string;
    passwordErr: null | string;
  };
};
export const initialState = {
  email: "",
  password: "",
  errors: {
    emailErr: null,
    passwordErr: null,
  },
};
export const reducer = (state: FeatureState, action: FeatureActions) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "validateEmail":
      if (state.email === "") {
        return {
          ...state,
          errors: {
            ...state.errors,
            emailErr: "please input Email",
          },
        };
      } else if (!expression.test(state.email)) {
        return {
          ...state,
          errors: {
            ...state.errors,
            emailErr: "please input valid email",
          },
        };
      } else if (action.payload === "incorrect login details") {
        return {
          ...state,
          errors: {
            ...state.errors,
            emailErr: "incorrect login details",
          },
        };
      } else {
        return {
          ...state,
          errors: {
            ...state.errors,
            emailErr: "",
          },
        };
      }
    case "validatePassword":
      if (state.password === "") {
        return {
          ...state,
          errors: {
            ...state.errors,
            passwordErr: "please input password",
          },
        };
      } else {
        return {
          ...state,
          errors: {
            ...state.errors,
            passwordErr: "",
          },
        };
      }
    case "blurEmail":
      return {
        ...state,
        errors: {
          ...state.errors,
          emailErr: "",
        },
      };
    case "blurPassword":
      return {
        ...state,
        errors: {
          ...state.errors,
          passwordErr: "",
        },
      };
    default:
      return state;
  }
};
