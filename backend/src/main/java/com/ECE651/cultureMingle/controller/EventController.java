package com.ECE651.cultureMingle.controller;

import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/activities")
    public ResponseEntity<List<Event>> getAllActivity() {
        return ResponseEntity.ok().body(eventService.getAllActivity());
    }

    @GetMapping("/activities/{id}")
    public ResponseEntity<Event> getActivityById(@PathVariable String id) {
        return ResponseEntity.ok().body(eventService.getActivityById(id));
    }

    @PostMapping("/activities")
    public ResponseEntity<Event> createActivity(@RequestBody Event event) {
        return ResponseEntity.ok().body(eventService.createActivity(event));
    }

    @PutMapping("/activities/{id}")
    public ResponseEntity<Event> updateActivity(@PathVariable String id, @RequestBody Event event) {
        event.setId(id);
        return ResponseEntity.ok().body(eventService.updateActivity(event));
    }

    @DeleteMapping("/activities/{id}")
    public HttpStatus deleteActivity(@PathVariable String id) {
        eventService.deleteActivity(id);
        return HttpStatus.OK;
    }
}
