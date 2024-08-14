package com.emid.services;

import java.time.LocalTime;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emid.custom_exception.DoctorNotFoundException;
import com.emid.dao.AppointmentRepository;
import com.emid.dao.DoctorRepository;
import com.emid.dto.DoctorAppointmentDto;
import com.emid.dto.DoctorDto;
import com.emid.entities.Appointment;
import com.emid.entities.Doctor;
import com.emid.entities.Role;

@Service
@Transactional
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private AppointmentService appointmentService;
	
	

	@Autowired
	private ModelMapper mapper;

	public List<Doctor> findAllDoctors() {
		return doctorRepository.findAll();
	}

	public DoctorAppointmentDto findDoctorById(Long id) {
//		Doctor doctor = doctorRepository.findById(id)
//				.orElseThrow(() -> new DoctorNotFoundException("Doctor not found with id " + id));
//
		
		
		Doctor doctor = doctorRepository.findByIdWithAppointments(id).orElseThrow(() -> new DoctorNotFoundException("Doctor not found with id " + id));
		List<Appointment> appointment = appointmentService.getAppointmentsByDoctorId(id);
		
		DoctorAppointmentDto dto = new DoctorAppointmentDto();
		dto.setAppointmentList(appointment);
		dto.setDoctor(doctor);
	
//		doctor.setBooking(appointment);
		
		return dto;

	}

	public Doctor findDoctorByEmail(String email) {
		return doctorRepository.findByEmail(email)
				.orElseThrow(() -> new DoctorNotFoundException("Doctor not found with email " + email));
	}

	public Doctor saveDoctor(DoctorDto doctorDto) {


		Doctor doctor = mapper.map(doctorDto, Doctor.class);
		doctor.setRole(Role.ROLE_DOCTOR);

		doctor.setStartTime(LocalTime.parse(doctorDto.getStartTime()));
		doctor.setEndTime(LocalTime.parse(doctorDto.getEndTime()));


		return doctorRepository.save(doctor);
	}

	public void deleteDoctor(Long id) {
		if (!doctorRepository.existsById(id)) {
			throw new DoctorNotFoundException("Doctor not found with id " + id);
		}
		doctorRepository.deleteById(id);
	}
}