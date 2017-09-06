package com.sytac.caseapocalypse.controllers;

import com.sytac.caseapocalypse.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @Autowired
    UserDao userDao;

    /*public UserResponse registerNewUser(@RequestBody NewUserRequest newUserRequest) {
        userDao.
    }

    @RequestMapping(method = RequestMethod.GET, value = "/test", produces = MediaType.APPLICATION_JSON_VALUE)
    public UserResponse register(@RequestBody UserRequest userRequest) {
        UserResponse userResponse = new UserResponse();
        userResponse.setId(1);
        userResponse.setEmail("user@email.nl");
        userResponse.setFullName("Test User");
        return userResponse;
    }*/
}
