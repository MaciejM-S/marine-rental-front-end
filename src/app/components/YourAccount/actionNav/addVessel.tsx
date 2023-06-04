import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  changeUserNav,
  changeVesselAdded,
  changeVesselUpdated,
  changeVesselRemoved,
} from "../../../../features/navigation/navigationSlice";
import {
  addName,
  addDescription,
  addYear,
  resetVessel,
} from "../../../../features/vessel/vesselSlice";
import NewUserInfo from "./addVessel/newUserInfo";
import VesSize from "./addVessel/vesSize";
import VesType from "./addVessel/vesType";
import VesImages from "./addVessel/vesImages";
import VesPrice from "./addVessel/vesPrice";
import VesName from "./addVessel/vesName";
import VesDescription from "./addVessel/vesDescription";
import VesLocation from "./addVessel/vesLocation";
import VesDate from "./addVessel/vesDate";
import logo from "../../../../pub/vector.png";
import { theme } from "../../../../theme/theme";
import {
  Avatar,
  Button,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CircularProgress } from "@mui/material";
import DatePicker from "./addVessel/datePicker/datePicker";
import actionNavStyle from "./actionNavStyle";
import { baseUrl } from "../../../../features/baseUrl";
const { helperTextProps, imageErrorStyle, yearErrorStyle, mainBoxStyle } =
  actionNavStyle;

export default function AddVessel() {
  const dispatch = useAppDispatch();
  const {
    name,
    description,
    year,
    size,
    type,
    pictures,
    pricePerDay,
    pricePerWeek,
    location,
    editedVessel,
    pickupDay,
    returnDay,
  } = useAppSelector((state) => state.vessel);
  const [nameError, setNameError] = React.useState("");
  const [descriptionError, setDescriptionError] = React.useState("");
  const [yearError, setYearError] = React.useState(false);
  const [imageError, setImageError] = React.useState("correct");
  const [perWeekErr, setPerWeekErr] = React.useState<string | null>(null);
  const [perDayErr, setPerDayErr] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value || e.target.value === "") {
      dispatch(addName(e.target.value));
    }
    setNameError("");
  };
  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value || e.target.value === "") {
      dispatch(addDescription(e.target.value));
    }
    setDescriptionError("");
  };
  const handleYear = (year: string) => {
    setYearError(false);
    if (year) {
      dispatch(addYear(Number(year)));
    }
  };
  const validate = () => {
    if (
      !name ||
      !description ||
      !pictures ||
      !pricePerDay ||
      !pricePerWeek ||
      (year && year < 1850) ||
      (year && year > 2023) ||
      year === null
    ) {
      if (!name) {
        setNameError("this field is required");
      }
      if (!description) {
        setDescriptionError("this field is required");
      }
      if (!pictures) {
        setImageError("noImage");
      }
      if (pricePerDay === null) {
        setPerDayErr("enter price per day");
      }
      if (pricePerWeek === null) {
        setPerWeekErr("enter price per week");
      }
      if ((year && year > 2023) || (year && year < 1850)) {
        setYearError(true);
      }
      return false;
    } else {
      return "validated";
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (validate() === "validated") {
      let fd = new FormData();
      if (pictures) {
        for (const picture of pictures) {
          fd.append("image", picture, picture.name);
        }
        name && fd.append("name", name);
        description && fd.append("description", description);
        year && fd.append("year", year.toString());
        size && fd.append("size", size);
        type && fd.append("type", type);
        pricePerDay && fd.append("pricePerDay", pricePerDay.toString());
        pricePerWeek && fd.append("pricePerWeek", pricePerWeek.toString());
        location && fd.append("location", location);
        editedVessel && fd.append("editedVessel", editedVessel);
        pickupDay && fd.append("pickupDay", pickupDay);
        returnDay && fd.append("returnDay", returnDay);
      }
      fetch(baseUrl+"/addVessel", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token222"),
        },
        body: fd,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "created") {
            setLoading(false);
            dispatch(changeUserNav(1));
            dispatch(changeVesselAdded(true));
            dispatch(changeVesselUpdated(false));
            dispatch(changeVesselRemoved(false));
            dispatch(resetVessel());
          } else if (result.message === "updated") {
            setLoading(false);
            dispatch(changeUserNav(1));
            dispatch(changeVesselUpdated(true));
            dispatch(changeVesselAdded(false));
            dispatch(changeVesselRemoved(false));
          }
        });
      setNameError("");
      setDescriptionError("");
      setPerDayErr("");
      setPerWeekErr("");
      setImageError("correct");
    } else {
      if (!name || !validate) {
        const scrollFirstStamp = document.getElementById("form");
        scrollFirstStamp &&
          scrollFirstStamp.scrollIntoView({ behavior: "smooth" });
      } else {
        const scrollLastStamp = document.getElementById("price");
        scrollLastStamp &&
          scrollLastStamp.scrollIntoView({ behavior: "smooth" });
      }
      setLoading(false);
    }
  };
  React.useEffect(() => {
    setImageError("correct");
  }, [pictures]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ margin: "0 auto" }}>
        <CssBaseline />
        <Box sx={mainBoxStyle}>
          <Box display={"flex"} sx={{ alignItems: "center" }}>
            <Avatar src={logo} sx={{ m: 1, bgcolor: "white" }} />
            <Typography component="h1" variant="h5">
              {editedVessel ? "Update vessel" : "Add vessel"}
            </Typography>{" "}
          </Box>
          <NewUserInfo />
          <Box
            id="form"
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <VesName
                  handleName={handleName}
                  helperTextProps={helperTextProps}
                  nameError={nameError}
                  name={name}
                />
              </Grid>
              <Grid item xs={12}>
                <VesDescription
                  handleDescription={handleDescription}
                  helperTextProps={helperTextProps}
                  descriptionError={descriptionError}
                  description={description}
                />
              </Grid>
              <Grid>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box sx={{ m: "20px 0 25px 16px" }}>
                    <VesDate
                      year={year}
                      handleYear={handleYear}
                      setYearError={setYearError}
                    />
                    {yearError && (
                      <Typography
                        sx={{ ...yearErrorStyle, ...helperTextProps.sx }}
                      >
                        please enter correct year
                      </Typography>
                    )}
                    <Grid>
                      <VesLocation />
                    </Grid>
                  </Box>
                  <Grid>
                    <VesSize />
                  </Grid>
                  <Grid>
                    <VesType />
                  </Grid>
                  <Grid id="price">
                    <VesPrice
                      pricePerDay={pricePerDay}
                      pricePerWeek={pricePerWeek}
                      perDayErr={perDayErr}
                      setPerDayErr={setPerDayErr}
                      perWeekErr={perWeekErr}
                      setPerWeekErr={setPerWeekErr}
                    />
                  </Grid>
                  <Grid>
                    <VesImages setImageError={setImageError} />
                    {imageError === "noImage" && (
                      <Typography sx={imageErrorStyle}>
                        please add a picture/-s of a vessel
                      </Typography>
                    )}
                    {imageError === "toMany" && (
                      <Typography sx={imageErrorStyle}>
                        you can upload up to 5 photos
                      </Typography>
                    )}
                    {imageError === "toBig" && (
                      <Typography sx={imageErrorStyle}>
                        maximal size of each picture is 2 Mb
                      </Typography>
                    )}
                  </Grid>
                  <Grid>
                    <DatePicker />
                  </Grid>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ mt: 3, mb: 2, color: "white" }}
            >
              {editedVessel ? "Update vessel" : "Add vessel"}
              {loading && <CircularProgress sx={{ ml: 1 }} size={16} />}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
