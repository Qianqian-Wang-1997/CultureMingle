package com.example.culturemingle.mapper;


import com.example.culturemingle.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Mapper
public interface UserMapper {

    @Insert("insert into users values(#{id}, #{username}, #{email}, #{password}, #{birthday}, #{gender})")
    public int insert(User user);

    @Select("select * from users")
    public List<User> getAll();

    @Select("select * from users where email=#{email}")
    public User getUser(String email);
}
