package com.emid.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.emid.custom_exception.DoctorNotFoundException;
import com.emid.dao.AppointmentRepository;
import com.emid.dao.DoctorRepository;
import com.emid.dto.AppointmentSlotDTO;
import com.emid.entities.Appointment;
import com.emid.entities.Doctor;
import com.emid.services.AppointmentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@Autowired
	private DoctorRepository doctorRepository;

	@Autowired
	private AppointmentRepository appointmentRepository;

	@PostMapping("/book")
	public ResponseEntity<Appointment> bookAppointment(@RequestBody AppointmentSlotDTO dto) {

		Appointment appointment = appointmentService.bookAppointment(dto);
		return ResponseEntity.ok(appointment);
	}

	@GetMapping("/patient/{patientId}")
	public ResponseEntity<List<Appointment>> getAppointmentsByPatientId(@PathVariable Long patientId) {
		List<Appointment> appointments = appointmentService.getAppointmentsByPatientId(patientId);
		if (appointments.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return ResponseEntity.ok(appointments);
	}

	@GetMapping("/doctor/{doctorId}/appointments")
	public ResponseEntity<List<Appointment>> getAppointmentsByDoctorId(@PathVariable Long doctorId) {
		List<Appointment> appointments = appointmentService.getAppointmentsByDoctorId(doctorId);
		return ResponseEntity.ok(appointments);
	}

	private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	private static final DateTimeFormatter TIME_FORMATTER = DateTimeFormatter.ofPattern("HH:mm");

	@GetMapping("/doctor/{doctorId}/available-slots")
	public ResponseEntity<List<LocalDateTime>> getAvailableTimeSlots(@PathVariable Long doctorId,
			@RequestParam String date, // Accept date as a string
			@RequestParam String startTime, // Accept start time as a string
			@RequestParam String endTime) // Accept end time as a string
			throws Exception {

		// Parse the date and time strings
		LocalDate localDate = LocalDate.parse(date, DATE_FORMATTER);
		LocalTime localStartTime = LocalTime.parse(startTime, TIME_FORMATTER);
		LocalTime localEndTime = LocalTime.parse(endTime, TIME_FORMATTER);

		// Fetch doctor by ID from the database (you would replace this with actual DB
		// retrieval)
		Doctor doctor = new Doctor();
		doctor.setId(doctorId);

		// Fetch available time slots from the service
		List<LocalDateTime> availableSlots = appointmentService.getAvailableTimeSlots(doctor, localDate, localStartTime,
				localEndTime);
		return ResponseEntity.ok(availableSlots);
	}

	@DeleteMapping("/{appointmentId}")
	public ResponseEntity<Void> cancelAppointment(@PathVariable Long appointmentId) {
		try {
			appointmentService.cancelAppointment(appointmentId);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			// Log the exception and return an appropriate response
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

}