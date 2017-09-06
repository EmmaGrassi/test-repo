package com.sytac.caseapocalypse.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "action_map")
public class ActionMap {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne
    private Role role;

    @OneToOne
    private Status status;

    @OneToOne
    private Action action;
}
