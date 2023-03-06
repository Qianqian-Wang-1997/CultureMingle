package com.ECE651.cultureMingle.model;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.util.Pair;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document
@Setter
@Getter
public class Activity {

    @Id
    private String id;

    @NotBlank
    private String title;

    private Date time;

    private String location;

    private String description;

    private List<Pair<String, Role>> attendees;

    public Activity() {}

    public Activity(String title, Date time, String location, String description) {
        this.title = title;
        this.time = time;
        this.location = location;
        this.description = description;
        this.attendees = new ArrayList<Pair<String, Role>>();
    }

    public Activity(String title, Date time, String location, String description, List<Pair<String, Role>> attendees) {
        this.title = title;
        this.time = time;
        this.location = location;
        this.description = description;
        this.attendees = attendees;
    }

    @Override
    public String toString() {
        return String.format("\nActivity\nid: %s\ntitle: %s\n", id, title);
    }
}
