package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.model.Event;

import java.util.List;

public interface EventService {

    Event createActivity(Event event);

    Event updateActivity(Event event);

    List<Event> getAllActivity();

    Event getActivityById(String id);

    void deleteActivity(String id);
}
