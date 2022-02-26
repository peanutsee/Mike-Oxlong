import { React, useState } from "react";
import { Steps, Tabs, Popover, Button, Modal } from "antd";

import { Row, Col, ListGroup } from "react-bootstrap";
import "./style.css";

import test from "./test.json";
import test2 from "./test2.json";

function ProgressSteps() {
  const [step, setStep] = useState(0);

  const { Step } = Steps;
  const [leftStep, setLeftStep] = useState(0);
  const onClickLeft = (curr) => {
    setLeftStep(curr);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const content = (
    <div>
      <p>Name : jerry</p>
      <p>job applied : SOFTWARE DEV INTERN</p>
      <p>Stage : 1</p>
      <Button onClick={showModal}>applicant resume</Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );

  return (
    <>
      <Row>
        <Col>
          {test2.map((data) => (
            <>
              <div className="ProgressSteps__leftColumn">
                <ListGroup>
                  <Popover content={content} title="Applicant name">
                    <ListGroup.Item className="ProgressSteps__leftItem">
                      {data.name}
                    </ListGroup.Item>
                  </Popover>
                </ListGroup>
              </div>
            </>
          ))}
        </Col>
        <Col xs={10}>
          {test.map((step, key) => (
            <>
              <div className="ProgressSteps__paddings">
                <h2 className="ProgressSteps__heading"> applicant 1 </h2>
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
            </>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default ProgressSteps;
