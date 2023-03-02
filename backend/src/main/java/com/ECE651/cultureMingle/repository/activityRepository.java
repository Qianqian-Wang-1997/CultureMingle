package com.ECE651.cultureMingle.repository;

import com.ECE651.cultureMingle.model.Activity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends MongoRepository<Activity, String> {

    @Query("{name:'?0'")
    Activity findActivityById(String id);
}
