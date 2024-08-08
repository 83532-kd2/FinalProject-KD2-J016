package com.emid.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emid.entities.User;

public interface UserDao extends JpaRepository<User, Long>  {
	Optional<User> findByEmailAndPassword(String email,String password);
}
