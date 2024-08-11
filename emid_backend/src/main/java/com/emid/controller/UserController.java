package com.emid.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emid.dto.ApiResponse;
import com.emid.dto.UserLoginDto;
import com.emid.services.UserService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired //byType
	private UserService userService;

	@PostMapping("/signin") //@RequestMapping(method=POST)
	public ResponseEntity<?> signInUser(
			@RequestBody UserLoginDto userLoginDto) {
		//@RequestBody => Json -> Java (un marshalling | de ser)
		System.out.println("in signin " + userLoginDto);
		try {
			return ResponseEntity.ok(
					userService.loginUser(userLoginDto));
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.
					status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
	}

}

