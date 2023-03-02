package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.exception.ResourceNotFoundException;
import com.ECE651.cultureMingle.model.Profile;
import com.ECE651.cultureMingle.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Profile createProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    @Override
    public Profile updateProfile(Profile profile) {
        Optional<Profile> profileDb = profileRepository.findById(profile.getId());

        if (profileDb.isPresent()) {
            Profile profileUpdate = profileDb.get();
            profileUpdate.setId(profile.getId());
            profileUpdate.setFirstName(profile.getFirstName());
            profileUpdate.setLastName(profile.getLastName());
            profileUpdate.setDateOfBirth(profile.getDateOfBirth());
            profileUpdate.setGender(profile.getGender());
            profileUpdate.setAvatar(profile.getAvatar());
            profileUpdate.setDescription(profile.getDescription());
            profileRepository.save(profileUpdate);
            return profileUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + profile.getId());
        }
    }

    @Override
    public List<Profile> getAllProfile() {
        return profileRepository.findAll();
    }

    @Override
    public Profile getProfileById(String id) {
        Optional<Profile> profileDb = profileRepository.findById(id);

        if (profileDb.isPresent()) {
            return profileDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }

    @Override
    public void deleteProfile(String id) {
        Optional<Profile> profileDb = profileRepository.findById(id);

        if (profileDb.isPresent()) {
            profileRepository.delete(profileDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }
}
