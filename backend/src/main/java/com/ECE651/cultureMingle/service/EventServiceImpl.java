package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.exception.ResourceNotFoundException;
import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.model.User;
import com.ECE651.cultureMingle.repository.EventRepository;

import com.ECE651.cultureMingle.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Event createEvent(Event event) { return eventRepository.save(event); }

    @Override
    public Event updateEvent(Event event) {

        Optional<Event> eventDb = eventRepository.findById(event.getId());

        if (eventDb.isPresent()) {

            Event eventUpdate = eventDb.get();

            if (event.getTitle() != null) {
                eventUpdate.setTitle(event.getTitle());
            }
            if (event.getDescription() != null) {
                eventUpdate.setDescription(event.getDescription());
            }
            if (event.getVenue() != null) {
                eventUpdate.setVenue(event.getVenue());
            }
            if (event.getHost() != null) {
                eventUpdate.setHost(event.getHost());
            }
            if (event.getTime() != null) {
                eventUpdate.setTime(event.getTime());
            }
            if (event.getImageUrls() != null) {
                eventUpdate.setImageUrls(event.getImageUrls());
            }
            if (event.getGroup() != null) {
                eventUpdate.setGroup(event.getGroup());
            }
            if (event.getAttendees() != null) {
                eventUpdate.setAttendees(event.getAttendees());
            }

            eventRepository.save(eventUpdate);

            return eventUpdate;

        } else {
            throw new ResourceNotFoundException("Event not found with id: " + event.getId());
        }
    }

    @Override
    public Event joinEvent(String id, User user) {

        Optional<Event> eventDb = eventRepository.findById(id);
        Optional<User> userDb = userRepository.findById(user.getId());

        if (eventDb.isPresent() && userDb.isPresent()) {

            Event eventUpdate = eventDb.get();

            Set<User> attendees = eventUpdate.getAttendees();
            attendees.add(user);

            eventUpdate.setAttendees(attendees);

            eventRepository.save(eventUpdate);

            User userUpdate = userDb.get();

            Set<Event> eventHistory = userUpdate.getEventHistory();
            eventHistory.add(eventUpdate);

            userUpdate.setEventHistory(eventHistory);

            userRepository.save(userUpdate);

            return eventUpdate;

        } else if (!eventDb.isPresent()) {
            throw new ResourceNotFoundException("Event not found with id: " + id);
        } else {
            throw new ResourceNotFoundException("User not found with id: " + user.getId());
        }
    }

    @Override
    public List<Event> getAllEvent() { return eventRepository.findAll(); }

    @Override
    public Event getEventById(String id) {

        Optional<Event> eventDb = eventRepository.findById(id);

        if (eventDb.isPresent()) {
            return eventDb.get();
        } else {
            throw new ResourceNotFoundException("Event not found with id: " + id);
        }
    }

    @Override
    public void deleteEvent(String id) {

        Optional<Event> eventDb = eventRepository.findById(id);

        if (eventDb.isPresent()) {
            eventRepository.delete(eventDb.get());
        } else {
            throw new ResourceNotFoundException("Event not found with id: " + id);
        }
    }
}
