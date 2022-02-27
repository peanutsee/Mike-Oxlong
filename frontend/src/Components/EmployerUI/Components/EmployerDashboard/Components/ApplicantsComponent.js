import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["View Resume", "Schedule Meeting", "Outcome"];

function ApplicantsComponent(props) {
  const { intern, internship } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <h4>
        {intern.first_name} {intern.last_name} for {internship.internship_title}{" "}
        Position
      </h4>
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Internship Case Closed!
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {activeStep + 1 === 1 ? (
                  <>
                    <p>First Name: {intern.first_name}</p>
                    <p>Last Name: {intern.last_name}</p>
                    <p>
                      Interests:{" "}
                      {intern.interests
                        .substring(2, intern.interests.length - 2)
                        .replaceAll("', '", ", ")}
                    </p>
                    <p>Education: {intern.education}</p>
                    <p>
                      Skills:{" "}
                      {intern.skills
                        .substring(2, intern.skills.length - 2)
                        .replaceAll("', '", ", ")}
                    </p>
                    <p>
                      Email:{" "}
                      <a href={`mailto:${intern.email}`}>{intern.email}</a>
                    </p>
                    <p>
                      Resume: <a>Click to Download</a>
                    </p>
                  </>
                ) : activeStep + 1 === 2 ? (
                  <>
                    <p>Schedule a Meeting</p>
                    <p>
                      <i class="fa-solid fa-magnifying-glass"></i> Zoom
                    </p>
                    <p>
                      <i class="fa-brands fa-google"></i> Google Meets
                    </p>
                    <p>
                      <i class="fa-solid fa-face-grin"></i> Face-to-Face
                    </p>
                  </>
                ) : (
                  <>
                    <h4>Decision</h4>
                    <br />
                    <p>
                      <i class="fa-solid fa-thumbs-up"></i>{" "}
                      <a>Send an Email to Confirm</a>
                    </p>
                    <br />
                    <p>
                      <i class="fa-solid fa-thumbs-down"></i>{" "}
                      <a>Send an Email to Reject</a>
                    </p>
                  </>
                )}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </>
  );
}

export default ApplicantsComponent;
