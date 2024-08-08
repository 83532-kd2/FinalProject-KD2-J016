package com.emid.services;

import com.emid.dto.UserLoginDto;
import com.emid.dto.UserResponseDto;

public interface UserService {
//user signin
	UserResponseDto loginUser(UserLoginDto dto);
	
}
