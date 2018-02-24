package org.mochinet2.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.beans.factory.annotation.Autowired;

import org.mochinet2.models.Priority;
import org.mochinet2.models.PriorityDAO;

@RestController
public class PrioritiesRest {

    @Autowired
    private PriorityDAO priorityDAO;

    @GetMapping("/priorities")
    public Iterable<Priority> getPriorities() {
        return priorityDAO.findAll();
    }
}
