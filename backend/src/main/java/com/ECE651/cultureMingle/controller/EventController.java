package com.ECE651.cultureMingle.controller;

import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/events")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Event>> getAllEvent() {
        return ResponseEntity.ok().body(eventService.getAllEvent());
    }

    @GetMapping("/events/{id}")
    @PreAuthorize("hasRole('USER')")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Event> getEventById(@PathVariable String id) {
        return ResponseEntity.ok().body(eventService.getEventById(id));
    }

    @PostMapping("/events")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        return ResponseEntity.ok().body(eventService.createEvent(event));
    }

    @PutMapping("/events/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Event> updateEvent(@PathVariable String id, @RequestBody Event event) {
        event.setId(id);
        return ResponseEntity.ok().body(eventService.updateEvent(event));
    }

    @DeleteMapping("/events/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public HttpStatus deleteEvent(@PathVariable String id) {
        eventService.deleteEvent(id);
        return HttpStatus.OK;
    }
}
