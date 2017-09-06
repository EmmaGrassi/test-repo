package com.sytac.caseapocalypse;

import com.sytac.caseapocalypse.dao.ActionMapDao;
import com.sytac.caseapocalypse.dao.DevCaseDao;
import com.sytac.caseapocalypse.dao.UserDao;
import com.sytac.caseapocalypse.model.ActionMap;
import com.sytac.caseapocalypse.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DaoTest {

    @Autowired
    UserDao userDao;

    @Test
    public void userDaoTest() {
        final String userName = "test_user";

        Assert.assertNull("Shouldn't be such user in the beginning.", userDao.findByName(userName));

        User user = new User();
        user.setName("test_user");
        user.setEmail("test_user@email.com");

        Assert.assertNotNull("User wasn't added to the database.", userDao.save(user));
        Assert.assertNotNull("User wasn't added to the database.", userDao.findByName(userName));

        User foundUser = userDao.findByName(userName);
        userDao.delete(foundUser);

        Assert.assertNull("The user shouldn't be in the repository after delete.", userDao.findByName(userName));
    }
}
