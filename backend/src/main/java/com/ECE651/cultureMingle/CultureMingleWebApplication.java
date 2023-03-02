package com.ECE651.cultureMingle;

import com.ECE651.cultureMingle.model.Gender;
import com.ECE651.cultureMingle.model.Profile;
import com.ECE651.cultureMingle.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.text.SimpleDateFormat;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class CultureMingleWebApplication implements CommandLineRunner {

	private final ProfileRepository profileRepository;

	@Autowired
	public CultureMingleWebApplication(ProfileRepository profileRepository) {
		this.profileRepository = profileRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(CultureMingleWebApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		if(profileRepository.findAll().isEmpty()){
			profileRepository.save(new Profile("Aosen", "Xiong",
					new SimpleDateFormat("yyyy-MM-dd").parse("1999-03-14"),
					Gender.NONBINARY, ""));
			profileRepository.save(new Profile("Ryan", "Cham",
					new SimpleDateFormat("yyyy-MM-dd").parse("2000-07-15"),
					Gender.MALE, ""));
		}
		for (Profile profile : profileRepository.findAll()) {
			System.out.println(profile);
		}
	}
}
