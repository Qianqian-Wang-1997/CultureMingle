package com.ECE651.cultureMingle.controller;

import com.ECE651.cultureMingle.model.Group;
import com.ECE651.cultureMingle.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GroupController {

    @Autowired
    private GroupService groupService;

    @GetMapping("/groups")
    public ResponseEntity<List<Group>> getAllGroup() {
        return ResponseEntity.ok().body(groupService.getAllGroup());
    }

    @GetMapping("/groups/{id}")
    public ResponseEntity<Group> getGroupById(@PathVariable String id) {
        return ResponseEntity.ok().body(groupService.getGroupById(id));
    }

    @PostMapping("/groups")
    public ResponseEntity<Group> createGroup(@RequestBody Group group) {
        return ResponseEntity.ok().body(groupService.createGroup(group));
    }

    @PutMapping("/groups/{id}")
    public ResponseEntity<Group> updateGroup(@PathVariable String id, @RequestBody Group group) {
        group.setId(id);
        return ResponseEntity.ok().body(groupService.updateGroup(group));
    }

    @DeleteMapping("/groups/{id}")
    public HttpStatus deleteGroup(@PathVariable String id) {
        groupService.deleteGroup(id);
        return HttpStatus.OK;
    }
}
