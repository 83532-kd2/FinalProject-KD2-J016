package com.emid.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
public class Patient extends User {

    @Column(length = 200)
    private String history;

    @Column(length = 200)
    private String description;

    private int height;

    private int weight;

    private boolean diabetes;

    private boolean allergy;

    private boolean bloodPressure;

    @OneToMany(mappedBy = "selectedPatient", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Appointment> booking = new ArrayList<>();

    public void addBooking(Appointment appointment) {
        this.booking.add(appointment);
        appointment.setSelectedPatient(this);
    }
}
















//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.OneToMany;
//import javax.persistence.PrimaryKeyJoinColumn;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@Entity
//@PrimaryKeyJoinColumn(name = "id")
//@Setter
//@Getter
//@ToString
//@NoArgsConstructor
//@AllArgsConstructor
//public class Patient extends User {
//	@Column(length = 200)
//	private String history;
//	@Column(length = 200)
//	private String description;
//	
//	private int height;
//	
//	private int weight;
//	
//	private boolean diabetes;
//	
//	private boolean allergy;
//	
//	private boolean bloodPressure;
//	
//	@OneToMany(mappedBy = "selectedPatient", cascade = CascadeType.ALL, orphanRemoval = true)
//    @JsonIgnore
//    private List<Appointment> booking = new ArrayList<Appointment>();
//	
//	public void addBooking(Appointment appointment) {
//		this.booking.add(appointment);
//		appointment.setSelectedPatient(this);
//		
//		
//	}
//	
//}
