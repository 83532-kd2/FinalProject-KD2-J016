package com.emid.dao;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emid.entities.Appointment;
import com.emid.entities.Doctor;
import com.emid.entities.Patient;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    // List<Appointment> findByDoctorId(Long doctorId);
    // List<Appointment> findByPatientId(Long patientId);
    // List<Appointment> findBySelectedDoctor(Doctor selecteddoctor);
    List<Appointment> findBySelectedPatient(Patient selectedpatient);

    List<Appointment> findBySelectedPatientId(Long patientId);

    Optional<Appointment> findBySelectedDoctorAndAppointmentDateTime(Doctor doctor, LocalDateTime appointmentDateTime);

    List<Appointment> findBySelectedDoctorAndAppointmentDateTimeBetween(Doctor doctor, LocalDateTime start,
            LocalDateTime end);

    List<Appointment> findBySelectedDoctor(Doctor selecteddoctor);
}