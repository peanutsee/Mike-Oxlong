import React, { useEffect, useRef, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./FileUpload.css";

function FileUpload({ uploadFile }) {
  const fileChosen = useRef(null);

  const [fileName, setFileName] = useState("No File Chosen");

  function selectFile() {
    setFileName(fileChosen.current.files[0].name);
    uploadFile(fileChosen.current.files[0]);
  }

  return (
    <div>
      <Container className="border py-4 mb-3">
        <Row>
          <div className="fs-4">Upload your resume</div>
        </Row>
        <Row>
          <Col>
            <div className="fw-lighter">Choose your latest</div>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <input
              type="file"
              id="html-file-upload-btn"
              hidden
              ref={fileChosen}
              onChange={selectFile}
            />
            <span id="file-chosen" className="me-3">
              {fileName}
            </span>
            <label for="html-file-upload-btn" id="file-upload-btn">
              UPLOAD
            </label>
          </Col>
        </Row>
      </Container>
      <div className="fw-lighter">only submit in PDF formats**</div>
    </div>
  );
}

export default FileUpload;
