package com.emid.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.emid.entities.BaseEntity;

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
public class DoctorDto {
	private Long id;
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

    // Doctor fields
    private int consultationFees;
    private String description;
    private String endTime;
    private String qualification;
    private String specialization;
    private String startTime;
}
