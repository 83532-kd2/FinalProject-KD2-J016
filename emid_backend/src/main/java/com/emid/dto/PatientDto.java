package com.emid.dto;

import java.time.LocalDate;

import com.emid.entities.BaseEntity;
import com.emid.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PatientDto  {
	private Long id;
	private Role role;
    // Person fields
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNo;
    private String gender;
    private LocalDate birthDate;
    private int age;

    // Address fields
    private String area;
    private String city;
    private String state;
    private String country;
    private String zipCode;

    // Patient fields
    private boolean allergy;
    private boolean bloodPressure;
    private String description;
    private boolean diabetes;
    private int height;
    private String history;
    private int weight;
}
