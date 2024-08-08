package com.emid.entities;

import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

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
public class Doctor extends Person {
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
    
    
    
    
    
    
	
	
   
}