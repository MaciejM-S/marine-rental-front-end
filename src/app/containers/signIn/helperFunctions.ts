import { FeatureState } from "./signInReducer";
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export function validateForm(state: FeatureState) {
  if (
    state.email === "" ||
    !expression.test(state.email) ||
    state.password === ""
  ) {
    return false;
  }
  return true;
}
