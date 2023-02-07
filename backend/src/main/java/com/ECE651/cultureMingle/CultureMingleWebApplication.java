package com.ECE651.cultureMingle;

import com.ECE651.cultureMingle.models.User;
import com.ECE651.cultureMingle.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class CultureMingleWebApplication implements CommandLineRunner {

	private final UserRepository userRepository;
	@Autowired
	public CultureMingleWebApplication(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	public static void main(String[] args) {
		SpringApplication.run(CultureMingleWebApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		if(userRepository.findAll().isEmpty()){

			userRepository.save(new User("Aosen", "Xiong"));
			userRepository.save(new User("Aric", "Xiong"));
		}
		for (User user : userRepository.findAll()) {
			System.out.println(user);
		}
	}
}
