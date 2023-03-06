package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.exception.ResourceNotFoundException;
import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event createActivity(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public Event updateActivity(Event event) {
        Optional<Event> activityDb = eventRepository.findById(event.getId());

        if (activityDb.isPresent()) {
            Event eventUpdate = activityDb.get();
            eventUpdate.setId(event.getId());
            eventUpdate.setTitle(event.getTitle());
            eventUpdate.setTime(event.getTime());
            eventUpdate.setLocation(event.getLocation());
            eventUpdate.setDescription(event.getDescription());
            eventUpdate.setAttendees(event.getAttendees());
            eventRepository.save(event);
            return eventUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + event.getId());
        }
    }

    @Override
    public List<Event> getAllActivity() {
        return eventRepository.findAll();
    }

    @Override
    public Event getActivityById(String id) {
        Optional<Event> activityDb = eventRepository.findById(id);

        if (activityDb.isPresent()) {
            return activityDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }

    @Override
    public void deleteActivity(String id) {
        Optional<Event> activityDb = eventRepository.findById(id);

        if (activityDb.isPresent()) {
            eventRepository.delete(activityDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }
}
