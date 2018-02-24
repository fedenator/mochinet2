package org.mochinet2.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Embedded;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.Valid;

@Entity
public class Priority {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;

    @Valid
    @NotNull
    @Embedded
    public Color color;

    @NotNull
    @Size(min = 1, max = 32)
    public String name;

    /*------------------------------ Constructores --------------------------*/
    public Priority() {
    }

    public Priority(String name, Color color) {
        this.name  = name;
        this.color = color;
    }

    /*----------------------------- Getters & Setters -----------------------*/
	public long getId() {
		return id;
	}
}
