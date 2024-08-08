package com.emid.dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emid.entities.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
	Optional<Patient> findByEmail(String email);
}
