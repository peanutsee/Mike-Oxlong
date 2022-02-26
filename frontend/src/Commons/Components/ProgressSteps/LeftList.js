import { React, useState } from "react";
import { Popover, Button, Modal } from "antd";
import { Col, ListGroup } from "react-bootstrap";
import "./style.css";
import test2 from "./test2.json";

function LeftList(prop) {
  const { name } = prop;
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

  function handleClick(app_name) {
    name(app_name);
  }

  const content = (
    <div>
      <p>Name : {name}</p>
      <p>job applied :job</p>
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
      <Col>
        {test2.map((data, index) => (
          <div className="ProgressSteps__leftColumn" key={index}>
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => {
                  handleClick(data.name);
                }}
              >
                {data.name}
              </button>
            </div>
          </div>
        ))}
      </Col>
    </>
  );
}

export default LeftList;
