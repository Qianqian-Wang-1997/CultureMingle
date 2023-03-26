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

@Service
@Transactional
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

//    @Autowired UserRepository userRepository;

    @Override
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

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
            if (event.getTime() != null) {
                eventUpdate.setTime(event.getTime());
            }
            if (event.getVenue() != null) {
                eventUpdate.setVenue(event.getVenue());
            }
            if (event.getHost() != null) {
                eventUpdate.setHost(event.getHost());
            }

            eventRepository.save(event);
            return eventUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + event.getId());
        }
    }

    @Override
    public List<Event> getAllEvent() {
        return eventRepository.findAll();
    }

    @Override
    public Event getEventById(String id) {
        Optional<Event> eventDb = eventRepository.findById(id);

        if (eventDb.isPresent()) {
            return eventDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }

    @Override
    public void joinEvent(String id, User user) {
        Optional<Event> eventDb = eventRepository.findById(id);

        if (eventDb.isPresent()) {
            Event eventUpdate = eventDb.get();
            eventUpdate.setAttendees(eventUpdate.getAttendees());

        }
    }

    @Override
    public void deleteEvent(String id) {
        Optional<Event> eventDb = eventRepository.findById(id);

        if (eventDb.isPresent()) {
            eventRepository.delete(eventDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }
}
