package com.sytac.caseapocalypse.dao;

import com.sytac.caseapocalypse.model.DevCase;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface DevCaseDao extends CrudRepository<DevCase, Long> {
    DevCase findByCandidate_Name(String name);
}
