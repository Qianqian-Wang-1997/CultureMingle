package com.ECE651.cultureMingle.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Document
@Getter
@Setter
public class Group {

    @Id
    private String id;

    @NotBlank
    @NotNull
    private String groupName;

    private String organizer;

    private List<String> members = new ArrayList<>();

    private List<String> events = new ArrayList<>();

    private String logoUrl;

    public Group(String groupName, String organizer) {
        this.groupName = groupName;
        this.organizer = organizer;
    }

    @Override
    public String toString() {
        return String.format("\nGroup\nid: %s\nname: %s\n", id, groupName);
    }
}
