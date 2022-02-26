import React from "react";

import FileUpload from "./Components/FileUpload";

function index({ uploadFile }) {
  return (
    <div>
      <FileUpload uploadFile={uploadFile} />
    </div>
  );
}

export default index;
