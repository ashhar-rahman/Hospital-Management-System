// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const UserPage = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/api/v1/appointment/get?patientId=${patientId}`
//           // `http://localhost:4000/api/v1/appointment/getall`
//         );
//         setAppointments(response.data.appointments);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       }
//     };

//     fetchAppointments();
//   }, [patientId]);

//   return (
//     <div className="user-page">
//       <h1>My Appointments</h1>
//       {appointments.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Appointment Date</th>
//               <th>Doctor</th>
//               <th>Department</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appointment) => (
//               <tr key={appointment._id}>
//                 <td>{appointment.appointment_date}</td>
//                 <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
//                 <td>{appointment.department}</td>
//                 <td>{appointment.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No appointments found.</p>
//       )}
//     </div>
//   );
// };

// export default UserPage;



import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPage = ({ patientId }) => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchAppointmentStatuses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/appointment/get/${patientId}`
          // `http://localhost:4000/api/v1/appointment/getall`
        );
        setStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching appointment statuses:", error);
      }
    };

    fetchAppointmentStatuses();
  }, [patientId]);

  return (
    <div className="user-page">
      <h1>My Appointments</h1>
      {status.length > 0 ? (
        <ul>
          {status.map(appointment => (
            <li key={appointment.id}>
              Appointment ID: {appointment.id} - Status: {appointment.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointment statuses found.</p>
      )}
    </div>
  );
};

export default UserPage;
