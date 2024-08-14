package com.emid.dto;

import java.time.LocalDateTime;

import com.emid.entities.AppointmentType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO {

    private Long doctorId;
    private Long patientId;
    private LocalDateTime appointmentDateTime;
//    private String appointmentDateTime;
    private AppointmentType appointmentType;
}
