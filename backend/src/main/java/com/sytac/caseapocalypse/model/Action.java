package com.sytac.caseapocalypse.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "actions")
public class Action {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
}
