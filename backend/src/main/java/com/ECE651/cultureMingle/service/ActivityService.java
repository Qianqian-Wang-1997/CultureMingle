package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.model.Activity;

import java.util.List;

public interface ActivityService {

    Activity createActivity(Activity activity);

    Activity updateActivity(Activity activity);

    List<Activity> getAllActivity();

    Activity getActivityById(String id);

    void deleteActivity(String id);
}
