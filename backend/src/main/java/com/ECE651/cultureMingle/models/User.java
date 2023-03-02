package com.ECE651.cultureMingle.models;

import jakarta.persistence.Id;
import org.hibernate.annotations.Filter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.sql.Date;

@Document
public class User {

    @Id
    private String id;
    @Field
    private String firstName;
    @Field
    private String lastName;

    private Date birthday;

    private String description;


    public User() {}

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format("User[id='%s', firstName='%s', lastName='%s']", id, firstName, lastName);

    }
}