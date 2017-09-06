package com.sytac.caseapocalypse.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String email;
    private String githubUserName;

    @OneToOne
    private Role role;

    private Date timestamp;
}
