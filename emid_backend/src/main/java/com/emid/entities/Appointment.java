package com.emid.entities;


import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.*;

@Entity
@Getter
@Setter
public class Appointment extends BaseEntity {

    @Column(name = "appointment_date_time", nullable = false)
    private LocalDateTime appointmentDateTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "appointment_type", nullable = false)
    private AppointmentType appointmentType;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 10, nullable = false)
    private AppointmentStatus status;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor selectedDoctor;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient selectedPatient;
}





//
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//import java.time.LocalTime;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@Entity
//@Getter
//@Setter
//
//@NoArgsConstructor
//@AllArgsConstructor
//public class Appointment extends BaseEntity {
//	
//	
//	private LocalDate date;
//	
//	private LocalTime time;
//	@Column(name = "appointment_type")
//	private String appointmentType;
//	
//	private boolean status;
//	@ManyToOne
//	@JoinColumn(name="doctor_id",nullable = false)
//	private Doctor selectedDoctor;
//	@ManyToOne
//	@JoinColumn(name = "patient_id",nullable = false)
//	private Patient selectedPatient;
//	
//	
//	
//	
//	
//}
