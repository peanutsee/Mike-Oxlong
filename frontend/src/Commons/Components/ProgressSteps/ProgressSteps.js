import { React, useState } from "react";
import { Steps, Tabs } from "antd";

import { Row, Col, ListGroup } from "react-bootstrap";
import "./style.css";

function ProgressSteps() {
  const [step, setStep] = useState(0);
  const { TabPane } = Tabs;
  const onChange = (current) => {
    setStep({ current });
  };
  const { Step } = Steps;
  const [leftStep, setLeftStep] = useState(0);
  const onClickLeft = (curr) => {
    setLeftStep(curr);
  };

  return (
    <Row>
      <Col>
        <div className="ProgressSteps__leftColumn">
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
              Applicant 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
              Applicunt 2
            </ListGroup.Item>
            <ListGroup.Item action>
              This one is a button for a random alert
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Col>

      <Col xs={8}>
        <div className="ProgressSteps__paddings">
          <h2 className="ProgressSteps__heading"> APPLICANT 1 </h2>
          <Steps
            progressDot
            current={leftStep}
            onChange={onClickLeft}
            direction="horizontal"
          >
            <Step title="step1" description="hello1" subtitle="hello2 " />
            <Step title="step2" description="hello1" subtitle="hello2 " />
            <Step title="hello" description="hello1" subtitle="hello2 " />
            <Step title="hello" description="hello1" subtitle="hello2 " />
          </Steps>
        </div>
      </Col>
    </Row>
  );
}

export default ProgressSteps;
