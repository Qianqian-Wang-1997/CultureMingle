package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.exception.ResourceNotFoundException;
import com.ECE651.cultureMingle.model.Group;
import com.ECE651.cultureMingle.model.User;
import com.ECE651.cultureMingle.repository.GroupRepository;

import com.ECE651.cultureMingle.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class GroupServiceImpl implements GroupService {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Group createGroup(Group group) { return groupRepository.save(group); }

    @Override
    public Group updateGroup(Group group) {

        Optional<Group> groupDb = groupRepository.findById(group.getId());

        if (groupDb.isPresent()) {

            Group groupUpdate = groupDb.get();

            if (group.getGroupName() != null) {
                groupUpdate.setGroupName(group.getGroupName());
            }
            if (group.getDescription() != null) {
                groupUpdate.setDescription(group.getDescription());
            }
            if (group.getLocation() != null) {
                groupUpdate.setLocation(group.getLocation());
            }
            if (group.getOrganizer() != null) {
                groupUpdate.setOrganizer(group.getOrganizer());
            }
            if (group.getLogoUrl() != null) {
                groupUpdate.setLogoUrl(group.getLogoUrl());
            }
            if (group.getMembers() != null) {
                groupUpdate.setMembers(group.getMembers());
            }
            if (group.getEvents() != null) {
                groupUpdate.setEvents(group.getEvents());
            }

            groupRepository.save(groupUpdate);

            return groupUpdate;

        } else {
            throw new ResourceNotFoundException("Group not found with id: " + group.getId());
        }
    }

    @Override
    public Group joinGroup(String id, User user) {

        Optional<Group> groupDb = groupRepository.findById(id);
        Optional<User> userDb = userRepository.findById(user.getId());

        if (groupDb.isPresent() && userDb.isPresent()) {

            Group groupUpdate = groupDb.get();

            Set<User> members = groupUpdate.getMembers();
            members.add(user);

            groupUpdate.setMembers(members);

            groupRepository.save(groupUpdate);

            return groupUpdate;

        } else if (!groupDb.isPresent()) {
            throw new ResourceNotFoundException("Group not found with id: " + id);
        } else {
            throw new ResourceNotFoundException("User not found with id: " + user.getId());
        }
    }

    @Override
    public List<Group> getAllGroup() { return groupRepository.findAll(); }

    @Override
    public Group getGroupById(String id) {

        Optional<Group> groupDb = groupRepository.findById(id);

        if (groupDb.isPresent()) {
            return groupDb.get();
        } else {
            throw new ResourceNotFoundException("Group not found with id: " + id);
        }
    }

    @Override
    public void deleteGroup(String id) {

        Optional<Group> groupDb = groupRepository.findById(id);

        if (groupDb.isPresent()) {
            groupRepository.delete(groupDb.get());
        } else {
            throw new ResourceNotFoundException("Group not found with id: " + id);
        }
    }
}
