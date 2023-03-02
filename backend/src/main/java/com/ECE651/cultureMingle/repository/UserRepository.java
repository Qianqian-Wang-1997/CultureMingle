package com.ECE651.cultureMingle.repository;

import com.ECE651.cultureMingle.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
