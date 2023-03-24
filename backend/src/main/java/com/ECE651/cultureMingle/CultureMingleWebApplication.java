package com.ECE651.cultureMingle;

import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.model.User;
import com.ECE651.cultureMingle.repository.EventRepository;
import com.ECE651.cultureMingle.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class CultureMingleWebApplication implements CommandLineRunner {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(CultureMingleWebApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        if (eventRepository.findAll().isEmpty()) {
            eventRepository.save(new Event("Culture Mingle Meeting",
                    "Let's do it together!",
                    new SimpleDateFormat("dd-MM-yyyy hh:mm:ss").parse("04-03-2023 20:00:00"),
                    "Engineering 7",
                    "Aosen Xiong"
                    ));
            eventRepository.save(new Event("Join the celebration of Spring Festival !",
                    "The day before the Chinese New Year usually accompanied with a dinner feast, consisting of special meats are served at the tables, as a main course for the dinner and as an offering for the New Year. This meal is comparable to Thanksgiving dinner in the U.S. and remotely similar to Christmas dinner in other countries with a high percentage of Christians.\n" +
                            "In northern China, it is customary to make jiaozi, or dumplings, after dinner to eat around midnight. Dumplings symbolize wealth because their shape resembles a Chinese sycee. In contrast, in the South, it is customary to make a glutinous new year cake (niangao) and send pieces of it as gifts to relatives and friends in the coming days. Niangao literally means \"new year cake\" with a homophonous meaning of \"increasingly prosperous year in year out\".\n" +
                            "After dinner, some families may visit local temples hours before midnight to pray for success by lighting the first incense of the year; however in modern practice, many households held parties to celebrate. Traditionally, firecrackers were lit to ward evil spirits when the household doors sealed, and are not to be reopened until dawn in a ritual called \"opening the door of fortune\". A tradition of staying up late on Chinese New Year's Eve is known as shousui, which is still practised as it is thought to add on to one's parents' longevity.\n" +
                            "Come celebrate the Spring Festival with us, regardless of your origin! Let's write spring couplets, craft rabbit lanterns, and prepare a dinner feast together in the Student Life Center. We look forward to seeing you on Friday!",
                    new SimpleDateFormat("dd-MM-yyyy hh:mm:ss").parse("23-01-2022 00:00:00"),
                    "Student Life Centre, 200 University Ave W, Waterloo, ON N2L 3G1",
                    "Ryan Cham"));
        }

        for (Event event : eventRepository.findAll()) {
            System.out.println(event);
        }

        for (User user : userRepository.findAll()) {
            System.out.println(user);
        }
    }
}


