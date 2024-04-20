import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NotificationBar = ({ appointmentId }) => {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const fetchAppointmentNotification = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/appointment/${appointmentId}/notification`,
          { withCredentials: true }
        );
        setNotification(data.notification);
      } catch (error) {
        toast.error("Failed to fetch notification");
      }
    };

    fetchAppointmentNotification();
  }, [appointmentId]);

  return (
    <div className="notification-bar">
      {notification && (
        <span className={`notification ${notification.toLowerCase()}`}>
          {notification}
        </span>
      )}
    </div>
  );
};

export default NotificationBar;
