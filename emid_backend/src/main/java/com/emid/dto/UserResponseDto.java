package com.emid.dto;

import com.emid.entities.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {

	private String email;
	private Long id;

	private Role role;
}
