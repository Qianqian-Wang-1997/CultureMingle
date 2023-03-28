package com.ECE651.cultureMingle;

import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.model.Group;
import com.ECE651.cultureMingle.model.User;
import com.ECE651.cultureMingle.repository.EventRepository;
import com.ECE651.cultureMingle.repository.GroupRepository;
import com.ECE651.cultureMingle.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CultureMingleWebApplication{

    public static void main(String[] args) { SpringApplication.run(CultureMingleWebApplication.class, args); }

}


