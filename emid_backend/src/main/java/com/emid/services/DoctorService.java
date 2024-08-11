package com.emid.services;
import java.time.LocalTime;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emid.custom_exception.DoctorNotFoundException;
import com.emid.dao.DoctorRepository;
import com.emid.dao.UserDao;
import com.emid.dto.DoctorDto;
import com.emid.entities.Doctor;
import com.emid.entities.Role;
import com.emid.entities.User;

@Service
@Transactional
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;
    
    @Autowired
    private UserDao userDao;
    
    @Autowired
    private ModelMapper mapper;

    public List<Doctor> findAllDoctors() {
        return doctorRepository.findAll();
    }

    public Doctor findDoctorById(Long id) {
        return doctorRepository.findById(id).orElseThrow(() -> new DoctorNotFoundException("Doctor not found with id " + id));
    }
    public Doctor findDoctorByEmail(String email) {
        return doctorRepository.findByEmail(email).orElseThrow(() -> new DoctorNotFoundException("Doctor not found with email " + email));
    }

    public Doctor saveDoctor(DoctorDto doctorDto) {
    	
//    	User user = new User();
//    	 user.setEmail(doctorDto.getEmail());
//         user.setPassword(doctorDto.getPassword());
//         
//         user.setRole(Role.ROLE_DOCTOR);
//         userDao.save(user);
         Doctor doctor = mapper.map(doctorDto, Doctor.class);
         doctor.setRole(Role.ROLE_DOCTOR);
//         System.out.println(doctor.getConsultationFees());
//         System.out.println(doctorDto.getConsultationFees());
//         doctor.setStartTime(LocalTime.parse(doctorDto.getStartTime()));
//         doctor.setEndTime(LocalTime.parse(doctorDto.getEndTime()));
         
    	
        return doctorRepository.save(doctor);
    }

    public void deleteDoctor(Long id) {
        if (!doctorRepository.existsById(id)) {
            throw new DoctorNotFoundException("Doctor not found with id " + id);
        }
        doctorRepository.deleteById(id);
    }
}