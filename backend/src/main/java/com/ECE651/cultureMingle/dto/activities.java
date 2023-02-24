package com.ECE651.cultureMingle.dto;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("activities")
@Setter
@Getter
public class activities {
    @Id
    private String id;
    private String activity_name;
    private String description;
    private Date activity_date;
//    public activities(String id, String activity_name, String description, Date activity_date) {
//        super();
//        this.id = id;
//        this.activity_name = activity_name;
//        this.description = description;
//        this.activity_date = activity_date;
//    }

}
