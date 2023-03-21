package com.ECE651.cultureMingle.repository;

import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends MongoRepository<Event, String> {
}
