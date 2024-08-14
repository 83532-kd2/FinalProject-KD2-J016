package com.emid.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emid.custom_exception.DoctorNotFoundException;
import com.emid.custom_exception.PatientNotFoundException;
import com.emid.dao.AppointmentRepository;
import com.emid.dao.DoctorRepository;
import com.emid.dao.PatientRepository;
import com.emid.dto.AppointmentSlotDTO;
import com.emid.entities.Appointment;
import com.emid.entities.AppointmentStatus;
import com.emid.entities.Doctor;
import com.emid.entities.Patient;
import com.emid.entities.TimeSlotGenerator;

@Service
@Transactional
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    public Appointment bookAppointment(AppointmentSlotDTO appointmentDTO) {
        // Fetch doctor and patient from the database
        Doctor doctor = doctorRepository.findById(appointmentDTO.getDoctorId())
                .orElseThrow(
                        () -> new DoctorNotFoundException("Doctor not found with id " + appointmentDTO.getDoctorId()));
        Patient patient = patientRepository.findById(appointmentDTO.getPatientId())
                .orElseThrow(() -> new PatientNotFoundException(
                        "Patient not found with id " + appointmentDTO.getPatientId()));

        // Convert the String to LocalDateTime
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

        LocalDateTime appointmentDateTime = LocalDateTime.parse(appointmentDTO.getAppointmentDateTime(), formatter);

        // Check if the doctor is available at the given date and time
        boolean isDoctorAvailable = appointmentRepository
                .findBySelectedDoctorAndAppointmentDateTime(doctor, appointmentDateTime).isEmpty();

        if (!isDoctorAvailable) {
            throw new RuntimeException("Doctor is not available at this time slot.");
        }

        // Create a new appointment
        Appointment appointment = new Appointment();
        appointment.setAppointmentDateTime(appointmentDateTime);
        appointment.setAppointmentType(appointmentDTO.getAppointmentType());
        appointment.setStatus(AppointmentStatus.SCHEDULED);
        appointment.setSelectedDoctor(doctor);
        appointment.setSelectedPatient(patient);

        // Save the appointment to the database
        return appointmentRepository.save(appointment);
    }

    public List<LocalDateTime> getAvailableTimeSlots(Doctor doctor, LocalDate date, LocalTime startTime,
            LocalTime endTime) {
        // Generate all possible 30-minute time slots
        List<LocalDateTime> allSlots = TimeSlotGenerator.generateTimeSlots(date, startTime, endTime);

        // Find booked appointments
        List<Appointment> bookedAppointments = appointmentRepository
                .findBySelectedDoctorAndAppointmentDateTimeBetween(doctor, LocalDateTime.of(date, startTime),
                        LocalDateTime.of(date, endTime));

        // Remove booked slots
        List<LocalDateTime> bookedSlots = bookedAppointments.stream()
                .map(Appointment::getAppointmentDateTime)
                .collect(Collectors.toList());

        // Filter out booked slots
        return allSlots.stream()
                .filter(slot -> !bookedSlots.contains(slot))
                .collect(Collectors.toList());
    }

    public List<Appointment> getAppointmentsForDoctor(Long doctorId, LocalDateTime startTime, LocalDateTime endTime) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found with id " + doctorId));

        return appointmentRepository.findBySelectedDoctorAndAppointmentDateTimeBetween(doctor, startTime, endTime);
    }


    public List<Appointment> getAppointmentsByDoctorId(Long doctorId) {
        // Ensure the doctor exists
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found with id " + doctorId));

        // Fetch and return appointments
        return appointmentRepository.findBySelectedDoctor(doctor);
    }

    public boolean isDoctorAvailable(Doctor doctor, LocalDateTime start, LocalDateTime end) {
        List<Appointment> appointments = getAppointmentsForDoctor(doctor, start, end);
        return appointments.isEmpty();
    }

    public List<Appointment> getAppointmentsForDoctor(Doctor doctor, LocalDateTime start, LocalDateTime end) {
        return appointmentRepository.findBySelectedDoctorAndAppointmentDateTimeBetween(doctor, start, end);
    }

    public void cancelAppointment(Long appointmentId) throws Exception {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new Exception("Appointment not found"));

        // Option 1: Delete the appointment
        // appointmentRepository.delete(appointment);

        // Option 2: Update the status to "canceled"
        appointment.setStatus(AppointmentStatus.CANCELED); // Ensure you have a status field
        appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsByPatientId(Long patientId) {
        return appointmentRepository.findBySelectedPatientId(patientId);
    }

}