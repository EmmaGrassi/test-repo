package com.sytac.caseapocalypse.dao;


import com.sytac.caseapocalypse.model.User;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface UserDao extends CrudRepository<User, Long> {
    User findByName(String name);
}
