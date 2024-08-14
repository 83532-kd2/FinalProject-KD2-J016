package com.emid.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class TimeSlotGenerator {

	public static List<LocalDateTime> generateTimeSlots(LocalDate date, LocalTime startTime, LocalTime endTime) {
        List<LocalDateTime> timeSlots = new ArrayList<>();
        LocalTime time = startTime;

        while (time.plusMinutes(30).isBefore(endTime) || time.plusMinutes(30).equals(endTime)) {
            timeSlots.add(LocalDateTime.of(date, time));
            time = time.plusMinutes(30);
        }

        return timeSlots;
    }
}
