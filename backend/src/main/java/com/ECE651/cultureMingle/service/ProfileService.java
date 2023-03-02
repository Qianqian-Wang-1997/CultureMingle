package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.model.Profile;

import java.util.List;

public interface ProfileService {

    Profile createProfile(Profile profile);

    Profile updateProfile(Profile profile);

    List<Profile> getAllProfile();

    Profile getProfileById(String id);

    void deleteProfile(String id);
}
