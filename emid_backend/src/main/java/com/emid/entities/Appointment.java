package com.emid.entities;


import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Appointment extends BaseEntity {
	
	
	private LocalDate date;
	
	private LocalDateTime time;
	@Column(name = "appointment_type")
	private String appointmentType;
	
	private boolean status;
	@ManyToOne
	@JoinColumn(name="doctor_id",nullable = false)
	private Doctor doctor;
	@ManyToOne
	@JoinColumn(name = "patient_id",nullable = false)
	private Patient patient;
	
	
	
	
	
}
