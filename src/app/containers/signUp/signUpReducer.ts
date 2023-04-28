const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

type FeatureActions = {
  type: string;
  payload: string;
};
export type FeatureState = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  repeatedPassword: string;
  errors: {
    fnameErr: null | string;
    lnameErr: null | string;
    emailErr: null | string;
    passwordErr: null | string;
    repeatedPasswordErr: null | string;
  };
};
export const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  repeatedPassword: "",
  errors: {
    fnameErr: null,
    lnameErr: null,
    emailErr: null,
    passwordErr: null,
    repeatedPasswordErr: null,
  },
};

export const errors = {
  fname: true,
};

export const reducer = (state: FeatureState, action: FeatureActions) => {
  switch (action.type) {
    case "fname":
      return { ...state, fname: action.payload };
    case "lname":
      return { ...state, lname: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "repeatedPassword":
      return { ...state, repeatedPassword: action.payload };
    case "validateFName":
      if (state.fname === "") {
        errors.fname = true;
        return {
          ...state,
          errors: {
            ...state.errors,
            fnameErr: "please input your first name",
          },
        };
      } else if (state.fname.length > 20) {
        return {
          ...state,
          errors: {
            ...state.errors,
            fnameErr: "maximal length is 20 characters",
          },
        };
      } else {
        errors.fname = false;
        return {
          ...state,
          errors: {
            ...state.errors,
            fnameErr: "",
          },
        };
      }
    case "validateLName":
      if (state.lname === "") {
        return {
          ...state,
          errors: {
            ...state.errors,
            lnameErr: "please input your last name",
          },
        };
      } else if (state.lname.length > 20) {
        return {
          ...state,
          errors: {
            ...state.errors,
            lnameErr: "maximal length is 20 characters",
          },
        };
      } else {
        return {
          ...state,
          errors: {
            ...state.errors,
            lnameErr: "",
          },
        };
      }
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
      } else if (state.password.length < 6) {
        return {
          ...state,
          errors: {
            ...state.errors,
            passwordErr: "minimal password length is 6 characters",
          },
        };
      } else if (state.password.length > 40) {
        return {
          ...state,
          errors: {
            ...state.errors,
            passwordErr: "maximal password length is 40 characters",
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
    case "validateRepeatedPassword":
      if (state.password === "") {
        return {
          ...state,
          errors: {
            ...state.errors,
            repeatedPasswordErr: "",
          },
        };
      } else if (state.password !== state.repeatedPassword) {
        return {
          ...state,
          errors: {
            ...state.errors,
            repeatedPasswordErr: "passwords are not the same",
          },
        };
      } else {
        return {
          ...state,
          errors: {
            ...state.errors,
            repeatedPasswordErr: "",
          },
        };
      }
    case "blurFName":
      return {
        ...state,
        errors: {
          ...state.errors,
          fnameErr: "",
        },
      };
    case "blurLName":
      return {
        ...state,
        errors: {
          ...state.errors,
          lnameErr: "",
        },
      };
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
    case "blurRepeatedPassword":
      return {
        ...state,
        errors: {
          ...state.errors,
          repeatedPasswordErr: "",
        },
      };
    case "emailExists":
      console.log("emailExists");
      return {
        ...state,
        errors: {
          ...state.errors,
          emailErr: "Email already exist",
        },
      };
    default:
      return state;
  }
};
