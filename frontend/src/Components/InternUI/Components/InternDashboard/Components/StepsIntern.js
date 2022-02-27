import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const steps = ["View Resume", "Schedule Meeting", "Outcome"];

export default function StepsIntern(props) {
  const { internships } = props;
  console.log(internships)
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  return (
    <>
      {internships.map((internship) =>
        internship.enrolled_intern.map((intern) => (
          <div className='mb-5'>
            <h4>
              {internship.internship_title} Position
            </h4>
            <Box sx={{ width: "100%" }}>
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" disabled>
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
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      {activeStep + 1 === 1 ? (
                        <>
                        <p>You application is current under review! Meanwhile, take up some <Link to='/upskill'>courses</Link> to upskill yourself. </p>
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
                          <br/>
                          <p><i class="fa-solid fa-thumbs-up"></i> <a>Send an Email to Confirm</a></p>
                          <br/>
                          <p><i class="fa-solid fa-thumbs-down"></i> <a>Send an Email to Reject</a></p>
                        </>
                      )}
                    </Typography>
                  </React.Fragment>
                )}
              </div>
            </Box>
          </div>
        ))
      )}
    </>
  );
}
