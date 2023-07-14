import React from "react";
import { Link } from "react-router-dom";
import "./Nabvar.css";

const Nabvar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary-subtle pb-2 text-white "
      id="nav"
    >
      <div className="container-fluid text-white d-flex align-items-center justify-content-between">
        <Link className="navbar-brand fs-2 fw-bold" to={"/"}>
          Clinic OPD
        </Link>
        <div
          className="collapse navbar-collapse ms-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-between">
            <li className="nav-item  ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/patient"
              >
                Patient
              </Link>
            </li>
            <li className="nav-item  ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/doctor"
              >
                Doctor
              </Link>
            </li>
            <li className="nav-item  ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/appointment"
              >
                Appointment
              </Link>
            </li>
            <li className="nav-item  ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/schedule"
              >
                Schedule
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nabvar;
