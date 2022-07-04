import React from "react";
import UploadFile from "./UploadFile";
import "./uploader.css";
import { useDispatch, useSelector } from "react-redux";
import { hideUploader } from "../../../reducers/uploadReducer";

const Uploader = () => {
  //   const files = [
  //     { id: 1, name: "File1", progress: 3 },
  //     { id: 2, name: "File2", progress: 22 },
  //     { id: 3, name: "File3", progress: 45 },
  //     { id: 1232, name: "Fil1123123e2", progress: 7 },
  //   ];
  const files = useSelector((state) => state.upload.files);
  const isVisible = useSelector((state) => state.upload.isVisible);
  const dispatch = useDispatch();

  return (
    isVisible && (
      <div className="uploader">
        <div className="uploader__header">
          <div className="uploader__title">Загрузки</div>
          <button
            className="uploader__close"
            onClick={() => dispatch(hideUploader())}
          >
            X
          </button>
        </div>
        {files.map((file) => (
          <UploadFile key={file.id} file={file} />
        ))}
      </div>
    )
  );
};

export default Uploader;
