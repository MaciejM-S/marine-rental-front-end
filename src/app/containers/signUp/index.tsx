import { KeyboardEvent } from "react";
import { useReducer, useState } from "react";
import yacht from "../../../pub/bay2.jpg";
import { reducer, initialState } from "./signUpReducer";
import { validateForm } from "./helperFunctions";
import store from "../../store";
import { logged, authenticated } from "../../../features/user/userSlice";
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { changeMainNav } from "../../../features/navigation/navigationSlice";
import logoDark from "../../../pub/vector.png";
import indexStyle from "../signIn/indexStyle";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../theme/theme";
import { Button, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { baseUrl } from "../../../features/baseUrl";

const { helperTextProps, buttonStyle } = indexStyle;

export default function SignUp() {
  const reducerDispatch = useAppDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "fname", payload: e.target.value });
    dispatch({ type: "blurFName", payload: "" });
  };
  const handleLName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "lname", payload: e.target.value });
    dispatch({ type: "blurLName", payload: "" });
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "email", payload: e.target.value });
    dispatch({ type: "blurEmail", payload: "" });
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "password", payload: e.target.value });
    dispatch({ type: "blurPassword", payload: "" });
  };
  const handleRepeatedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "repeatedPassword", payload: e.target.value });
    dispatch({ type: "blurRepeatedPassword", payload: "" });
  };
  function validate() {
    dispatch({ type: "validateFName", payload: "" });
    dispatch({ type: "validateLName", payload: "" });
    dispatch({ type: "validateEmail", payload: "" });
    dispatch({ type: "validatePassword", payload: "" });
    dispatch({ type: "validateRepeatedPassword", payload: "" });
  }
  const handleSubmit = async () => {
    setLoading(true);
    validate();
    if (!validateForm(state)) {
      setLoading(false);
      return;
    }
    fetch(baseUrl+"/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === "email exists") {
          dispatch({ type: "emailExists", payload: "" });
          setLoading(false);
        } else if (data.message === "created") {
          localStorage.setItem("token222", data.newToken);
          store.dispatch(authenticated(true));
          store.dispatch(logged(data));
          setLoading(false);
          navigate("/your-account");
          reducerDispatch(changeMainNav(3));
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  const handleKey = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Grid container component="main">
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url('${yacht}')`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              display="flex"
              sx={{ alignItems: "center", justifyContent: "center", mt: 8 }}
            >
              <img src={logoDark} style={{ width: "40px" }} alt="" />
              <Typography component="h1" variant="h5" sx={{ ml: 1 }}>
                Sign up
              </Typography>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ m: 2, mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={state.fname}
                    onChange={handleFName}
                    onKeyDown={handleKey}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    color="secondary"
                    helperText={state.errors.fnameErr}
                    FormHelperTextProps={helperTextProps}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={state.lname}
                    onChange={handleLName}
                    onKeyDown={handleKey}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    color="secondary"
                    helperText={state.errors.lnameErr}
                    FormHelperTextProps={helperTextProps}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={state.email}
                    onChange={handleEmail}
                    onKeyDown={handleKey}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    color="secondary"
                    helperText={state.errors.emailErr}
                    FormHelperTextProps={helperTextProps}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={state.password}
                    onChange={handlePassword}
                    onKeyDown={handleKey}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    color="secondary"
                    helperText={state.errors.passwordErr}
                    FormHelperTextProps={helperTextProps}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={state.repeatedPassword}
                    onChange={handleRepeatedPassword}
                    onKeyDown={handleKey}
                    required
                    fullWidth
                    name="repeatedPassword"
                    label="Repeat Password"
                    type="password"
                    id="repeatpassword"
                    autoComplete="new-password"
                    color="secondary"
                    helperText={state.errors.repeatedPasswordErr}
                    FormHelperTextProps={helperTextProps}
                  />
                </Grid>
              </Grid>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                fullWidth
                variant="contained"
                sx={buttonStyle}
              >
                Sign Up
                <CircularProgress
                  size={25}
                  sx={{ display: loading ? "block" : "none", ml: 1 }}
                  color="secondary"
                />
              </Button>
            </Box>
            <Grid container justifyContent="flex-start">
              <Grid item sx={{ mb: 4 }}>
                <Link
                  href="/sign-in"
                  color="secondary"
                  variant="body2"
                  sx={{ m: 2, fontWeight: 700, opacity: 0.7 }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}
