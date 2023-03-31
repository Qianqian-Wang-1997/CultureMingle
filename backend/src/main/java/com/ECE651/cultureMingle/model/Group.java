package com.ECE651.cultureMingle.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.HashSet;
import java.util.Set;

@Document
@Getter
@Setter
public class Group {

    @Id
    private String id;

    private String groupName;

    private String description;

    private String location;

    private String organizer;

    private String logoUrl;

    @DBRef
    private Set<User> members = new HashSet<>();

    @DBRef
    private Set<Event> events = new HashSet<>();

    @Override
    public String toString() { return "Group (id=" + id + ", name=" + groupName + ")"; }
}
