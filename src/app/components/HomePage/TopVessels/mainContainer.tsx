import * as React from "react";
import { Vessel as VesselType } from "../../../../typings/vessel";
import Vessel from "./Vessel";
import { theme } from "../../../../theme/theme";
import Container from "@mui/material/Container";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Button } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
type MainContainerProps = {
  vessels: VesselType[] | undefined;
};
export default function MainContainer(props: MainContainerProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.vessels ? props.vessels.length : 0;
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Container maxWidth="md">
      <Box>
        <AutoPlaySwipeableViews
          interval="4000"
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
        >
          {props.vessels &&
            props.vessels.map((vessel, index) => (
              <div style={{ margin: "0 auto", padding: 3 }} key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Vessel key={vessel.id} ves={vessel} />
                ) : null}
              </div>
            ))}
        </AutoPlaySwipeableViews>
      </Box>
      {props.vessels && props.vessels.length > 1 && (
        <MobileStepper
          variant="text"
          color="secondary"
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{ color: theme.palette.primary.main }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={{ color: theme.palette.primary.main }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      )}
    </Container>
  );
}
