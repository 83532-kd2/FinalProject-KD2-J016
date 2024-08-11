package com.emid.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emid.entities.Appointment;

import java.util.List;
import com.emid.entities.Doctor;
import com.emid.entities.Patient;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
//    List<Appointment> findByDoctorId(Long doctorId);
//    List<Appointment> findByPatientId(Long patientId);
    List<Appointment> findBySelectedDoctor(Doctor selecteddoctor);
    List<Appointment> findBySelectedPatient(Patient selectedpatient);
}