package com.ECE651.cultureMingle.controller;

import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.service.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvent() { return ResponseEntity.ok().body(eventService.getAllEvent()); }

    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable String id) {
        return ResponseEntity.ok().body(eventService.getEventById(id));
    }

    @PostMapping("/events/{userId}")
    public ResponseEntity<Event> createEvent(@PathVariable String userId, @RequestBody Event event) {
        eventService.createEvent(event);
        eventService.hostEvent(userId, event.getId());
        if (event.getGroup() != null) {
            eventService.bindEvent(event.getGroup(), event.getId());
        }
        return ResponseEntity.ok().body(event);
    }

    @PutMapping("/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable String id, @RequestBody Event event) {
        event.setId(id);
        return ResponseEntity.ok().body(eventService.updateEvent(event));
    }

    @PutMapping("/events/join/{userId}&{eventId}")
    public ResponseEntity<Event> joinEvent(@PathVariable String userId, @PathVariable String eventId) {
        return ResponseEntity.ok().body(eventService.joinEvent(userId, eventId));
    }

    @DeleteMapping("/events/{id}")
    public HttpStatus deleteEvent(@PathVariable String id) {
        eventService.deleteEvent(id);
        return HttpStatus.OK;
    }
}
