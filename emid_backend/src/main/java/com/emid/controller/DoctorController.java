package com.emid.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.emid.dto.DoctorAppointmentDto;
import com.emid.dto.DoctorDto;
import com.emid.entities.Doctor;
import com.emid.services.DoctorService;

import java.util.List;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.findAllDoctors();
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorAppointmentDto> getDoctorById(@PathVariable Long id) {
    	
        DoctorAppointmentDto dto = doctorService.findDoctorById(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/email")
    public ResponseEntity<Doctor> getDoctorByEmail(@RequestParam String email) {
        Doctor doctor = doctorService.findDoctorByEmail(email);
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Doctor> createDoctor(@RequestBody DoctorDto doctorDto) {
        Doctor newDoctor = doctorService.saveDoctor(doctorDto);
        return new ResponseEntity<>(newDoctor, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id, @RequestBody DoctorDto doctorDto) {
        doctorDto.setId(id);
        Doctor updatedDoctor = doctorService.saveDoctor(doctorDto);
        return new ResponseEntity<>(updatedDoctor, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
