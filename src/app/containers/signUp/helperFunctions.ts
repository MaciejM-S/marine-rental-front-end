import { FeatureState } from "./signUpReducer";
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export function validateForm(state: FeatureState) {
  if (state.fname === "" || state.fname.length > 20) {
    return false;
  }
  if (state.lname === "" || state.lname.length > 20) {
    return false;
  }
  if (state.email === "" || !expression.test(state.email)) {
    return false;
  }
  if (state.password.length < 6 || state.password.length > 40) {
    return false;
  }
  if (state.repeatedPassword !== state.password) {
    return false;
  }
  return true;
}
