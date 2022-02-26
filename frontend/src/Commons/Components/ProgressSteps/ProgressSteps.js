import { React, useState } from "react";
import { Steps } from "antd";

import { Col } from "react-bootstrap";
import "./style.css";

function ProgressSteps(prop) {
  const { name, steps, number, intern } = prop;

  const [step] = steps;
  const { Step } = Steps;
  const [leftStep, setLeftStep] = useState(0);

  const onClickLeft = intern
    ? null
    : (curr) => {
        setLeftStep(curr);
      };
  return (
    <Col xs={20}>
      <div className="ProgressSteps__paddings">
        <h2 className="ProgressSteps__heading">
          {number}. {name}
        </h2>
        <Steps
          progressDot
          current={leftStep}
          onChange={onClickLeft}
          direction="horizontal"
        >
          <Step
            title={step.title}
            description={step.desc}
            subtitle={step.subtitle}
          />
          <Step
            title={step.title2}
            description={step.desc2}
            subtitle={step.subtitle2}
          />
          <Step
            title={step.title3}
            description={step.desc3}
            subtitle={step.subtitle3}
          />
        </Steps>
      </div>
    </Col>
  );
}

export default ProgressSteps;
