package com.emid.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emid.custom_exception.PatientNotFoundException;
import com.emid.dao.PatientRepository;
import com.emid.dao.UserDao;
import com.emid.dto.PatientDto;
import com.emid.entities.Patient;
import com.emid.entities.Role;
import com.emid.entities.User;

import java.util.List;

@Service
@Transactional
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;
    
    @Autowired
    private UserDao userDao;
    
    @Autowired
    private ModelMapper mapper;
    

    public List<Patient> findAllPatients() {
        return patientRepository.findAll();
    }

    public Patient findPatientById(Long id) {
        return patientRepository.findById(id).orElseThrow(() -> new PatientNotFoundException("Patient not found with id " + id));
    }
    
    public Patient findPatientByEmail(String email) {
        return patientRepository.findByEmail(email).orElseThrow(() -> new PatientNotFoundException("Patient not found with email " + email));
    }

    public Patient savePatient(PatientDto patientDto) {
    	User user = new User();
   	 user.setEmail(patientDto.getEmail());
        user.setPassword(patientDto.getPassword());
        user.setRole(Role.ROLE_PATIENT);
        userDao.save(user);
        Patient patient = mapper.map(patientDto, Patient.class);
        return patientRepository.save(patient);
    }

    public void deletePatient(Long id) {
        if (!patientRepository.existsById(id)) {
            throw new PatientNotFoundException("Patient not found with id " + id);
        }
        patientRepository.deleteById(id);
    }
}
