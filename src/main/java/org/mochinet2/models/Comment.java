package org.mochinet2.models;

import java.util.Date;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.TemporalType;
import javax.persistence.Temporal;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * POJO que representa un comentario
 */
@Entity
public class Comment {

    public enum Priority {
        HIGH   ("Alta"),
        MEDIUM ("Media"),
        LOW    ("Baja"),
        NULL   ("Nula");

        private final String name;

        Priority (String name) {
            this.name = name;
        }

        public String getName() {
            return this.name;
        }
    }

    private static final DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");

    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date    creationDate;

    @NotNull
    @Size(min = 1, message = "El mensaje no puede esta vacio")
    private String  message;

    @NotNull
    private Priority priority;

    @NotNull
    private boolean deleted;

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;

    /*---------------------------- Constructors -----------------------------*/
    //Default constructor for Hibernate
    public Comment () {
        this.deleted = false;
        this.id      = -1;

        this.creationDate = new Date();
    }

    public Comment (String message, Priority priority) {
        this ();
        this.message  = message;
        this.priority = priority;
    }

    public Comment (Date creationDate, String message, Priority priority) {
        this (message, priority);
        this.creationDate = creationDate;
    }

    public Comment (Date creationDate, String message, Priority priority, long id) {
        this (creationDate, message, priority);
        this.id = id;
    }

    public Comment (Date creationDate, String message, Priority priority, boolean deleted, long id) {
        this (creationDate, message, priority, id);
        this.deleted = deleted;
    }

    /*----------------------------- Funciones -------------------------------*/
    public String toString() {
        return
            "ID:           " + id       + "\n" +
            "Message:      " + message  + "\n" +
            "Priority:     " + priority + "\n" +
            "Deleted:      " + deleted  + "\n" +
            "CreationDate: " + dateFormat.format(creationDate) + "\n";
    }

    /*--------------------------- Getters y Setters -------------------------*/
    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
    public Date getCreationDate(){
        return this.creationDate;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public String getMessage() {
        return this.message;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }
    public Priority getPriority() {
        return this.priority;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
    public boolean isDeleted() {
        return this.deleted;
    }

    public long getId() {
        return this.id;
    }
}
