package com.emid.entities;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@PrimaryKeyJoinColumn(name = "id")
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Doctor extends User {
	@Column(length = 50)
	private String specialization;
	
	@Column(name = "start_time")
    private LocalTime startTime;
	
	@Column(name = "end_time")
	private LocalTime endTime;
	
    @Column(name = "cousultation_fees")
    private int consultationFees;
    
    @Column(length = 200)
    private String qualification;
    
    @Column(length = 200)
    private String description;
    
    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    @Column(name = "slots")
    private List<BooleanStatus> slotStatus = new ArrayList<>(Collections.nCopies(30, BooleanStatus.TRUE));

    
    @OneToMany(mappedBy = "selectedDoctor", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Appointment> booking = new ArrayList<Appointment>();
    

	public void addBooking(Appointment appointment) {
		this.booking.add(appointment);
		appointment.setSelectedDoctor(this);
		
		
	}
}