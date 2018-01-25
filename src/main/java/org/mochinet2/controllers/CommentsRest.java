package org.mochinet2.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;

import org.hibernate.HibernateException;

import java.util.Arrays;

import org.mochinet2.models.Comment;
import org.mochinet2.models.CommentsDAO;


@RestController
public class CommentsRest {

    @Autowired
    private CommentsDAO commentsDao;

    @GetMapping ("/comments")
    public Iterable<Comment> getComments() {
        return commentsDao.findAll();
    }

    @PostMapping ("/add-comment")
    public boolean addComment(@RequestBody @Valid Comment comment) {
        try {
            commentsDao.save(
                Arrays.asList( new Comment(comment.getMessage(), comment.getPriority()) )
            );
        } catch (HibernateException e) {
            return false;
        }
        return true;
    }

    @GetMapping ("delete-comment/{id}")
    public boolean deleteComment(@PathVariable long id) {
        Comment comment = commentsDao.findOne(id);
        if (comment == null) return false;
        commentsDao.delete(comment);
        return true;
    }
}
