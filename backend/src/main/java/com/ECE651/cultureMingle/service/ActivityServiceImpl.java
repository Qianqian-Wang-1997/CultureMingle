package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.exception.ResourceNotFoundException;
import com.ECE651.cultureMingle.model.Activity;
import com.ECE651.cultureMingle.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public Activity updateActivity(Activity activity) {
        Optional<Activity> activityDb = activityRepository.findById(activity.getId());

        if (activityDb.isPresent()) {
            Activity activityUpdate = activityDb.get();
            activityUpdate.setId(activity.getId());
            activityUpdate.setTitle(activity.getTitle());
            activityUpdate.setTime(activity.getTime());
            activityUpdate.setLocation(activity.getLocation());
            activityUpdate.setDescription(activity.getDescription());
            activityUpdate.setAttendees(activity.getAttendees());
            return activityUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + activity.getId());
        }
    }

    @Override
    public List<Activity> getAllActivity() {
        return activityRepository.findAll();
    }

    @Override
    public Activity getActivityById(String id) {
        Optional<Activity> activityDb = activityRepository.findById(id);

        if (activityDb.isPresent()) {
            return activityDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }

    @Override
    public void deleteActivity(String id) {
        Optional<Activity> activityDb = activityRepository.findById(id);

        if (activityDb.isPresent()) {
            activityRepository.delete(activityDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }
}
