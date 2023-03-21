package com.ECE651.cultureMingle.controller;

import com.ECE651.cultureMingle.model.User;
import com.ECE651.cultureMingle.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @PutMapping("/user/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User user) {
        user.setId(id);
        return ResponseEntity.ok().body(userService.updateUser(user));
    }

    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }
}
