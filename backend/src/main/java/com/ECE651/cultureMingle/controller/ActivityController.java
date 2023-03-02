package com.ECE651.cultureMingle.controller;

import com.ECE651.cultureMingle.model.Activity;
import com.ECE651.cultureMingle.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/activities")
    public ResponseEntity<List<Activity>> getAllActivity() {
        return ResponseEntity.ok().body(activityService.getAllActivity());
    }

    @GetMapping("/activities/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable String id) {
        return ResponseEntity.ok().body(activityService.getActivityById(id));
    }

    @PostMapping("/activities")
    public ResponseEntity<Activity> createActivity(@RequestBody Activity activity) {
        return ResponseEntity.ok().body(activityService.createActivity(activity));
    }

    @PutMapping("/activities/{id}")
    public ResponseEntity<Activity> updateActivity(@PathVariable String id, @RequestBody Activity activity) {
        activity.setId(id);
        return ResponseEntity.ok().body(activityService.updateActivity(activity));
    }

    @DeleteMapping("/activities/{id}")
    public HttpStatus deleteActivity(@PathVariable String id) {
        activityService.deleteActivity(id);
        return HttpStatus.OK;
    }
}
