package com.ECE651.cultureMingle.controller;

import com.ECE651.cultureMingle.model.Profile;
import com.ECE651.cultureMingle.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/profiles")
    public ResponseEntity<List<Profile>> getAllProfile() {
        return ResponseEntity.ok().body(profileService.getAllProfile());
    }

    @GetMapping("/profiles/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable String id) {
        return ResponseEntity.ok().body(profileService.getProfileById(id));
    }

    @PostMapping("/profiles")
    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile) {
        return ResponseEntity.ok().body(profileService.createProfile(profile));
    }

    @PutMapping("/profiles/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable String id, @RequestBody Profile profile) {
        profile.setId((id));
        return ResponseEntity.ok().body(profileService.updateProfile(profile));
    }

    @DeleteMapping("/profiles/{id}")
    public HttpStatus deleteProfile(@PathVariable String id) {
        profileService.deleteProfile(id);
        return HttpStatus.OK;
    }
}
