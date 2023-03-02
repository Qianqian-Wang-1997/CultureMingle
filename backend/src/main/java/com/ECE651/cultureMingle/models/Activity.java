package com.ECE651.cultureMingle.models;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
@Setter
@Getter
public class Activity {

//    Avatar;
    @Id
    private String id;
    @Field
    private String Name;
    @Field
    private String introduction;

}
