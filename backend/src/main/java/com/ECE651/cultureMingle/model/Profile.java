package com.ECE651.cultureMingle.model;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Getter
@Setter
public class Profile {

    @Id
    private String id;

    private String firstName;

    private String lastName;

    private Date dateOfBirth;

    private Gender gender;

    private String avatar;

    private String description;

    public Profile() {}

    public Profile(String firstName, String lastName, Date dateOfBirth, Gender gender, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.avatar = "https://png.pngtree.com/png-clipart/20220124/original/pngtree-penguin-animal-small-avatar-illustration-design-png-image_7190204.png";
        this.description = description;
    }

    public Profile(String firstName, String lastName, Date dateOfBirth, Gender gender, String avatar, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.avatar = avatar;
        this.description = description;
    }

    @Override
    public String toString() {
        return String.format("\nProfile\nid: %s\nfirstName: %s\nlastName: %s\n", id, firstName, lastName);
    }
}
