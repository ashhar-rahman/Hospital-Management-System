import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import NotificationBar from "../components/NotificationBar";
const Appointment = () => {
  return (
    <>
    <NotificationBar/>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />

      <AppointmentForm/>
    </>
  );
};

export default Appointment;
