package com.emid.dao;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.emid.entities.Doctor;
import com.emid.entities.Patient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {
    private LocalDate date;
	
	private LocalDateTime time;
	
	private String appointmentType;
	
	private boolean status;
	
	private Long doctorId;
	
	private Long patientId;

	private int slotIndex;

}
