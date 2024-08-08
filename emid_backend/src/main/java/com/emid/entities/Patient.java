package com.emid.entities;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@PrimaryKeyJoinColumn(name = "id")
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Patient extends Person {
	@Column(length = 200)
	private String history;
	@Column(length = 200)
	private String description;
	
	private int height;
	
	private int weight;
	
	private boolean diabetes;
	
	private boolean allergy;
	
	private boolean bloodPressure;
	
	
	
}
