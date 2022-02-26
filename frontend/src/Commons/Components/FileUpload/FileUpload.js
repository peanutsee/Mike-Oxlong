import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./FileUpload.css";

function FileUpload() {
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
          <Col className="d-flex justify-content-end">
            <input type="file" id="html-file-upload-btn" hidden />
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

export { FileUpload };
