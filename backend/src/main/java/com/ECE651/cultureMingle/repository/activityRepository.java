package com.ECE651.cultureMingle.repository;

import com.ECE651.cultureMingle.dto.activities;
import org.springframework.data.mongodb.repository.Query;

public interface activityRepository {

    @Query("{name:'?0}")
    activities findActivityById(String id);

//    @Query(value="")
}
