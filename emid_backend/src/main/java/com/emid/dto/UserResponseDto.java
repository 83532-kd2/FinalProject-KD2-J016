package com.emid.dto;

import java.time.LocalDate;

import com.emid.entities.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto extends BaseDto{
	
	private String email;	
	
	private Role role;
}
