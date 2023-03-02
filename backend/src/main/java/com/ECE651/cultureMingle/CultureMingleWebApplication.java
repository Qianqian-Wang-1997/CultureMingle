package com.ECE651.cultureMingle;

import com.ECE651.cultureMingle.model.Activity;
import com.ECE651.cultureMingle.model.Gender;
import com.ECE651.cultureMingle.model.Profile;
import com.ECE651.cultureMingle.repository.ActivityRepository;
import com.ECE651.cultureMingle.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.text.SimpleDateFormat;
import java.util.ArrayList;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class CultureMingleWebApplication implements CommandLineRunner {

	private final ProfileRepository profileRepository;
	private final ActivityRepository activityRepository;

	@Autowired
	public CultureMingleWebApplication(ProfileRepository profileRepository, ActivityRepository activityRepository) {
		this.profileRepository = profileRepository;
		this.activityRepository = activityRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(CultureMingleWebApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		if(profileRepository.findAll().isEmpty()){
			profileRepository.save(new Profile("Aosen", "Xiong", new SimpleDateFormat("yyyy-MM-dd").parse("1999-07-06"), Gender.NONBINARY, "I am Aosen Xiong!"));
			profileRepository.save(new Profile("Ryan", "Cham", new SimpleDateFormat("yyyy-MM-dd").parse("2000-07-15"), Gender.MALE, "I am Ryan Cham!"));
		}
		for (Profile profile : profileRepository.findAll()) {
			System.out.println(profile);
		}

		if(activityRepository.findAll().isEmpty()){
			ArrayList<String> attendees = new ArrayList<>();
			for (Profile profile : profileRepository.findAll()) {
				attendees.add(profile.getId());
			}
			activityRepository.save(new Activity("Culture Mingle Meeting", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2023-03-03 20:00:00"), "Engineering 7", "Let's do it!", attendees));
		}
		for (Activity activity : activityRepository.findAll()) {
			System.out.println(activity);
		}
	}
}
