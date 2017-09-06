package com.sytac.caseapocalypse.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "dev_cases")
public class DevCase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String type;

    private Date deadline;

    @OneToOne
    private User candidate;

    @OneToOne
    private User recruiter;

    @OneToOne
    private User reviewer;

    private String githubUrl;

    @OneToOne
    private Status status;
}
