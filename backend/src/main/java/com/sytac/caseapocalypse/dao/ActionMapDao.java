package com.sytac.caseapocalypse.dao;

import com.sytac.caseapocalypse.model.ActionMap;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface ActionMapDao extends CrudRepository<ActionMap, Long> {
    ActionMap findActionMapByStatus_Name_AndRole_Name(String statusName, String roleName);
}
