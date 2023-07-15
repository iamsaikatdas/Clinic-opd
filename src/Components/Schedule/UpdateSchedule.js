import React, { useState } from "react";
import "../Nabvar.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateSchedule = () => {
  const { id } = useParams();
  // submit form
  // add patient
  const [schedule, setSchedule] = useState({
    dayOfWeek: "",
    timeSlot: "",
    availability: "",
    doctorId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSchedule({ ...schedule, [e.target.name]: value });
  };
  const HandelSubmit = (e) => {
    e.preventDefault();

    const base_url = "http://localhost:8320/schedule/update" + id;
    axios
      .post(base_url, schedule)
      .then((res) => alert("Schedule updated successfully."))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="doctor">
        <h1>Update Schedule</h1>
        <form onSubmit={HandelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Day of Week
            </label>
            <input
              type="text"
              name="dayOfWek"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={schedule.dayOfWeek}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Time Slot
            </label>
            <input
              type="text"
              name="timeSlot"
              className="form-control"
              id="exampleInputPassword1"
              value={schedule.timeSlot}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Availability
            </label>
            <input
              type="text"
              name="availability"
              className="form-control"
              id="exampleInputPassword1"
              value={schedule.availability}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Doctor Id
            </label>
            <input
              type="text"
              name="doctorId"
              className="form-control"
              id="exampleInputPassword1"
              value={schedule.doctorId}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateSchedule;
