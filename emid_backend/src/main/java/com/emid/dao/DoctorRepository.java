package com.emid.dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.emid.entities.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	Optional<Doctor> findByEmail(String email);

	@Query("SELECT d FROM Doctor d LEFT JOIN FETCH d.booking WHERE d.id = :id")
	Optional<Doctor> findByIdWithAppointments(@Param("id") Long id);

}
