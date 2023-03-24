package com.ECE651.cultureMingle.model;

import lombok.Getter;
import lombok.Setter;
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

    private Set<String> members = new HashSet<>();

    private Set<String> events = new HashSet<>();

    private String logoUrl;

    public Group(String groupName, String description, String location, String organizer) {
        this.groupName = groupName;
        this.description = description;
        this.location = location;
        this.organizer = organizer;
    }

    @Override
    public String toString() {
        return String.format("\nGroup\nid: %s\nname: %s\n", id, groupName);
    }
}
