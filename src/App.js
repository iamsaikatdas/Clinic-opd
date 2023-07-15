import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nabvar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Doctor from "./Components/Doctor/Doctor";
import UpdateDoctor from "./Components/Doctor/UpdateDoctor";
import Patient from "./Components/Patient/Patient";
import PatientUpdate from "./Components/Patient/PatientUpdate";
import Appointment from "./Components/Appointment/Appointment";
import UpdateAppointment from "./Components/Appointment/UpdateAppointment";
import Schedule from "./Components/Schedule/Schedule";
import UpdateSchedule from "./Components/Schedule/UpdateSchedule";
// import Schedule from "./Components/Schedule/UpdateSchedule";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/updateDoctor/:id" element={<UpdateDoctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/updatePatient/:id" element={<PatientUpdate />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route
          path="/appointment/updateAppointment/:id"
          element={<UpdateAppointment />}
        />
        <Route path="/schedule" element={<Schedule />} />
        <Route
          path="/schedule/updateSchedule/:id"
          element={<UpdateSchedule />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
