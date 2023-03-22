package com.ECE651.cultureMingle.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document
@Getter
@Setter
public class Event {

    @Id
    private String id;

    @NotBlank
    @NotNull
    private String title;

    private String description;

    private Date time;

    private String venue;

    private String host;

    private List<String> attendees = new ArrayList<>();

    private String group;

    private List<String> imageUrls = new ArrayList<>();

    public Event() {}

    public Event(String title, String description, Date time, String venue, String host) {
        this.title = title;
        this.description = description;
        this.time = time;
        this.venue = venue;
        this.host = host;
    }

    @Override
    public String toString() {
        return String.format("\nEvent\nid: %s\ntitle: %s\n", id, title);
    }
}
