import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import yacht from "../../../pub/bay2.jpg";
import logoDark from "../../../pub/vector.png";
import { validateForm } from "./helperFunctions";
import store from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { reducer, initialState } from "./signInReducer";
import { authenticateUser, logged } from "../../../features/user/userSlice";
import { changeMainNav } from "../../../features/navigation/navigationSlice";
import indexStyle from "./indexStyle";
import { theme } from "../../../theme/theme";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { baseUrl } from "../../../features/baseUrl";


const { mainBoxStyle, helperTextProps, buttonStyle } = indexStyle;

export default function SignIn() {
  const dispatchRedux = useAppDispatch();
  const authenticated = useAppSelector((state) => state.user.authenticated);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event: React.
    FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    dispatch({ type: "validateEmail", payload: "" });
    dispatch({ type: "validatePassword", payload: "" });
    if (validateForm(state)) {
      fetch(baseUrl+"/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "logged") {
            store.dispatch(logged(data.user));
            localStorage.setItem("token222", data.newToken);
            navigate("/your-account");
            dispatchRedux(changeMainNav(2));
            setLoading(false);
            dispatchRedux(authenticateUser());
          } else {
            dispatch({
              type: "validateEmail",
              payload: "incorrect login details",
            });
            setLoading(false);
          }
        })
        .catch((error) => {
          if (error) {
            setLoading(false);
            navigate("/error");
          }
        });
    } else {
      setLoading(false);
    }
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "email", payload: e.target.value });
    dispatch({ type: "blurEmail", payload: "" });
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "password", payload: e.target.value });
    dispatch({ type: "blurPassword", payload: "" });
  };
  return (
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={mainBoxStyle}>
            <Box display="flex" sx={{ alignItems: "center" }}>
              <img src={logoDark} style={{ width: "40px" }} alt="" />
              <Typography component="h3" variant="h5" sx={{ ml: 1 }}>
                Sign in
              </Typography>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={handleEmail}
                value={state.email}
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={state.errors.emailErr}
                FormHelperTextProps={helperTextProps}
              />
              <TextField
                onChange={handlePassword}
                value={state.password}
                helperText={state.errors.passwordErr}
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                FormHelperTextProps={helperTextProps}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={buttonStyle}
                disabled={loading}
              >
                Sign In
                {loading && <CircularProgress size={16} sx={{ ml: 1 }} />}
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    sx={{ fontWeight: 700, opacity: 0.75 }}
                    color="secondary"
                    href="/sign-up"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
