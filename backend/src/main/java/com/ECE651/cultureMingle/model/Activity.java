package com.ECE651.cultureMingle.model;

import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document
@Setter
@Getter
public class Activity {

    @Id
    private String id;

    private String title;

    private Date time;

    private String location;

    private String description;

    private List<String> attendees;

    public Activity() {}

    public Activity(String title, Date time, String location, String description) {
        this.title = title;
        this.time = time;
        this.location = location;
        this.description = description;
        this.attendees = new ArrayList<String>();
    }

    public Activity(String title, Date time, String location, String description, List<String> attendees) {
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
