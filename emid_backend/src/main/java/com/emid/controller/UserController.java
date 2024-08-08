package com.emid.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emid.dto.ApiResponse;
import com.emid.dto.UserLoginDto;
import com.emid.services.UserService;


@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired //byType
	private UserService userService;

	public UserController() {
		System.out.println("in ctor " + getClass());
	}

	/*
	 * Desc - User signin 
	 * URL - http://host:port/users/signin 
	 * Method - POST 
	 * payload - dto (email n pwd) 
	 * Successful Resp - SC 200, user details - all (dto) 
	 * Error resp - SC 400 , error mesg -wrapped in DTO(ApiResponse)
	 * 
	 */
	@PostMapping("/signin") //@RequestMapping(method=POST)
	public ResponseEntity<?> signInUser(
			@RequestBody UserLoginDto request) {
		//@RequestBody => Json -> Java (un marshalling | de ser)
		System.out.println("in signin " + request);
		try {
			return ResponseEntity.ok(
					userService.loginUser(request));
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.
					status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
	}

}

