//package com.ECE651.cultureMingle.controller;
//
//import com.ECE651.cultureMingle.model.User;
//import com.ECE651.cultureMingle.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//public class UserController {
//    @Autowired
//    private UserService userService;
//
//    @GetMapping("/users/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<User> getActivityById(@PathVariable String id) {
//        return ResponseEntity.ok().body(userService.getUserById(id));
//    }
//
//    @PostMapping("/users")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<User> createUser(@RequestBody User user) {
//        return ResponseEntity.ok().body(userService.createUser(user));
//    }
//
//    @PutMapping("/users/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<User> updateActivity(@PathVariable String id, @RequestBody User user) {
//        user.setId(id);
//        return ResponseEntity.ok().body(userService.updateUser(user));
//    }
//
//    @DeleteMapping("/users/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public HttpStatus deleteUser(@PathVariable String id) {
//        userService.deleteUser(id);
//        return HttpStatus.OK;
//    }
//}
