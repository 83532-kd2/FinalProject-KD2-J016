package com.emid.dto;

import java.util.List;

import com.emid.entities.Appointment;
import com.emid.entities.Doctor;

import lombok.Data;
@Data
public class DoctorAppointmentDto {
	
	private Doctor doctor;
	
	private List<Appointment> appointmentList;
	

}
