package com.ECE651.cultureMingle.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Document
@Getter
@Setter
public class Event {

    @Id
    private String id;

    private String title;

    private String description;

    private String venue;

    private String host;

    private Date time;

    private Set<String> imageUrls = new HashSet<>();

    @DBRef
    private Group group;

    @DBRef
    private Set<User> attendees = new HashSet<>();

    public Event() { }

    @Override
    public String toString() { return "Event (id=" + id + ", title=" + title + ")"; }
}
