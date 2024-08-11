package com.emid.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emid.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
