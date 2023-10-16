import React from "react";
import "./path_tracker.css";

const Path_Tracker = () => {
  return (
    <div className="path_tracker bg-light d-lg-block d-none">
      <div className="container-fluid">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-md-4 d-flex justify-content-start align-items-center">
            <h4 className="p-0 m-0 fs-6 fw-light">
              Cement Concrete Calculator
            </h4>
            <p
              className="align-content-center p-0 m-0 ms-1 pt-1 px-2"
              style={{ fontSize: "0.78rem" }}
            >
              IS 456
            </p>
          </div>
          <div className="path col-md-8">
            <ul className="list-unstyled d-flex justify-content-end align-items-center m-0 p-0 me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>
              <li className="mx-2 ">
                <a href="/" className="text-decoration-none">
                  Home
                </a>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <li className="mx-2">
                <a href="/" className="text-decoration-none">
                  Quantity Estimator
                </a>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <li className="mx-2">
                <a href="/" className="text-decoration-none">
                  Calculate Cement Concrete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Path_Tracker;
