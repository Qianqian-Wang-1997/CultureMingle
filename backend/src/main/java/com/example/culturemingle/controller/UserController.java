package com.example.culturemingle.controller;

import com.example.culturemingle.entity.User;
import com.example.culturemingle.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserMapper userMapper;

    @PostMapping("/register")
    public String register(User user){
        if(email_dup_check(user)){
            int i = userMapper.insert(user);
            if(i>0){
                return "Add user----success!"+"\n"+user.toString();
            }else{
                return "Add user----failed!"+"\n"+user.toString();
            }
        }else {
            return "Email already been registered.";
        }
    }

    @PostMapping("/login")
    public String login(User user){
        User db_user= userMapper.getUser(user.getEmail());
        if(password_check(user.getPassword(), db_user.getPassword())){
            return "login success!"+"\n"+user.toString();
        }else{
            return "Wrong Password";
        }
    }

    public boolean email_dup_check(User user){
        List<User> list = userMapper.getAll();
        for(User item_user:list){
            String item_userEmail = item_user.getEmail();
            if(user.getEmail().equals(item_userEmail)){
                return false;
            }
        }
        return true;
    }

    public boolean password_check(String password, String db_password){
        if(db_password.equals(password)){
            return true;
        }else{
            return false;
        }
    }
}
