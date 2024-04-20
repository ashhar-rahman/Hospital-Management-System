import express from "express";
import {
  deleteAppointment,
  getAppointmentById,
  // getAppointmentsStatusByPatientId,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.get("/get/:patientId", isPatientAuthenticated, getAppointmentById);
// router.get("/appointments/:patientId/status", isPatientAuthenticated, getAppointmentsStatusByPatientId);

router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;