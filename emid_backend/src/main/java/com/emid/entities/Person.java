package com.emid.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
//import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Person extends BaseEntity {
	@Column(name = "first_name",length = 50)
	private String firstName;
	
	@Column(name = "last_name",length = 50)
	private String lastName;
	
	@Column(length = 50)
	private String email;
	
	@Column(length = 50)
	private String password;
	
	@Column(length = 50)
	private String gender;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "birth_date")
	private LocalDate birthDate;
	
	@Column(length = 20,name = "phone_no")
	private String phoneNo;
//	
//	@ManyToOne(cascade = CascadeType.PERSIST)
//	@JoinColumn(name = "address_id")
//	private Address address;
	
	@Column(name="area",length=100)
	private String area;
	
	@Column(length=20)
	private String city;
	@Column(length=20)
	private String state;
	@Column(length=20)
	private String country;
	@Column(length=20,name="zip_code")
	private String zipCode; 
	
}
