package com.emid.services;



import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emid.custom_exception.AuthenticationException;
import com.emid.dao.UserDao;
import com.emid.dto.UserLoginDto;
import com.emid.dto.UserResponseDto;
import com.emid.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	// depcy
	@Autowired
	private UserDao userDao;
	@Autowired
	private ModelMapper mapper;

	

	@Override
	public UserResponseDto loginUser(UserLoginDto dto) {
		User user = userDao.findByEmailAndPassword(
				dto.getEmail(), dto.getPwd())
				.orElseThrow(() -> 
				new AuthenticationException("Invalid Email or Password !!!!!!"));
		//valid login -user : persistent -> entity -> dto
		return mapper.map(user, UserResponseDto.class);
	}

}

