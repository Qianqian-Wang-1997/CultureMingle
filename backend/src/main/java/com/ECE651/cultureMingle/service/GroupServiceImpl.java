package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.exception.ResourceNotFoundException;
import com.ECE651.cultureMingle.model.Group;
import com.ECE651.cultureMingle.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class GroupServiceImpl implements GroupService {

    @Autowired
    private GroupRepository groupRepository;

    @Override
    public Group createGroup(Group group) {
        return groupRepository.save(group);
    }

    @Override
    public Group updateGroup(Group group) {
        Optional<Group> groupDb = groupRepository.findById(group.getId());

        if (groupDb.isPresent()) {
            Group groupUpdate = groupDb.get();

            if (group.getGroupName() != null) {
                groupUpdate.setGroupName(group.getGroupName());
            }
            if (group.getOrganizer() != null) {
                groupUpdate.setOrganizer(group.getOrganizer());
            }
            if (group.getLogoUrl() != null) {
                groupUpdate.setLogoUrl(group.getLogoUrl());
            }

            groupRepository.save(group);
            return groupUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + group.getId());
        }
    }

    @Override
    public List<Group> getAllGroup() {
        return groupRepository.findAll();
    }

    @Override
    public Group getGroupById(String id) {
        Optional<Group> groupDb = groupRepository.findById(id);

        if (groupDb.isPresent()) {
            return groupDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }

    @Override
    public void deleteGroup(String id) {
        Optional<Group> groupDb = groupRepository.findById(id);

        if (groupDb.isPresent()) {
            groupRepository.delete(groupDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }
}
