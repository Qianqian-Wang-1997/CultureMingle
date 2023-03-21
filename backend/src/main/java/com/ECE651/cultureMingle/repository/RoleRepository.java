package com.ECE651.cultureMingle.repository;

import com.ECE651.cultureMingle.model.ERole;
import com.ECE651.cultureMingle.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
