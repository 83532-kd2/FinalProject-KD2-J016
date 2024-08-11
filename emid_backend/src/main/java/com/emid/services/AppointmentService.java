package com.emid.services;
import java.time.LocalDateTime;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emid.custom_exception.DoctorNotFoundException;
import com.emid.custom_exception.PatientNotFoundException;
import com.emid.custom_exception.ResourceNotFoundException;
import com.emid.dao.AppointmentDto;
import com.emid.dao.AppointmentRepository;
import com.emid.dao.DoctorRepository;
import com.emid.dao.PatientRepository;
import com.emid.entities.Appointment;
import com.emid.entities.BooleanStatus;
import com.emid.entities.Doctor;
import com.emid.entities.Patient;

@Service
@Transactional
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private ModelMapper mapper;

    
    public Appointment bookAppointment(AppointmentDto appointmentDto) {

////		Customer customer=customerdao.findById(dto.getUserId())
////				.orElseThrow(()-> new RuntimeException("Invalid Customer Id"));
////		
////		Bus busId= busDao.findById(dto.getBusId())
////				.orElseThrow(()-> new RuntimeException("Invalid Bus Id"));
//
////    	List <BooleanStatus >list=busId.getSeatStatus();
////		if(list.get(dto.getSeatNumber())==BooleanStatus.FALSE) {
////			return	"Seat Is Already Booked";
////		}
////		list.set(dto.getSeatNumber(), BooleanStatus.FALSE);
////		busId.setSeatStatus(list);
////		Reservation reservation=mapper.map(dto, Reservation.class);
////		reservation.setCustomer(customer);
////		reservation.setSelectedBus(busId);
////	    reservation.setReservationDate(LocalDate.now());
////		Reservation persistReservation=reservationdao.save(reservation);
////		return "Reservation Confirmed";
    	Doctor doctor = doctorRepository.findById(appointmentDto.getDoctorId()).orElseThrow(()-> new DoctorNotFoundException("doctor not found with id "+ appointmentDto.getDoctorId()));
    	Patient patient = patientRepository.findById(appointmentDto.getPatientId()).orElseThrow(()-> new PatientNotFoundException("patient not found exception"));
    	LocalDateTime appointmentTime = appointmentDto.getTime();
    	// Assuming the appointmentDto.getSlotIndex() gives the index of the slot in the list
        int slotIndex = appointmentDto.getSlotIndex(); 

        // Check if the slot is available
        if (doctor.getSlotStatus().get(slotIndex) == BooleanStatus.FALSE) {
            return null;
        }

        // Mark the slot as booked
        doctor.getSlotStatus().set(slotIndex, BooleanStatus.FALSE);
        doctorRepository.save(doctor);

        // Create and save the appointment
        Appointment appointment = new Appointment();
        appointment.setSelectedDoctor(doctor);
        appointment.setSelectedPatient(patient);
        appointment.setDate(appointmentDto.getTime().toLocalDate());
        appointment.setTime(appointmentDto.getTime().toLocalTime());
        appointment.setStatus(true);

        appointmentRepository.save(appointment);

        return appointment;
    }

    public void cancelAppointment(Long appointmentId) {
        if (appointmentRepository.existsById(appointmentId)) {
            appointmentRepository.deleteById(appointmentId);
        } else {
            throw new ResourceNotFoundException("Appointment not found with id: " + appointmentId);
        }
    }

    public Appointment updateAppointment(Long appointmentId, Appointment appointmentDetails) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
            .orElseThrow(() -> new ResourceNotFoundException("Appointment not found with id: " + appointmentId));

        appointment.setDate(appointmentDetails.getDate());
        appointment.setTime(appointmentDetails.getTime());
        appointment.setAppointmentType(appointmentDetails.getAppointmentType());
        appointment.setStatus(appointmentDetails.isStatus());
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsByDoctor(Long doctorId) {
    	Doctor doctor = doctorRepository.findById(doctorId).orElseThrow(() -> new DoctorNotFoundException("Doctor not found with id " + doctorId));
        return appointmentRepository.findBySelectedDoctor(doctor);
    }

    public List<Appointment> getAppointmentsByPatient(Long patientId) {
    	Patient patient = patientRepository.findById(patientId).orElseThrow(() -> new PatientNotFoundException("Patient not found with id " + patientId));
        return appointmentRepository.findBySelectedPatient(patient);
    }
    
}
