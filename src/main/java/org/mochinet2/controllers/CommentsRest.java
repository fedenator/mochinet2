package org.mochinet2.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;

import org.hibernate.HibernateException;

import org.mochinet2.models.Comment;
import org.mochinet2.models.CommentsDAO;


@RestController
public class CommentsRest {

    @Autowired
    private CommentsDAO commentsDao;

    @GetMapping ("/comments")
    public Iterable<Comment> getComments() {
        return commentsDao.activeComments();
    }

    @PostMapping ("/add-comment")
    public boolean addComment(@RequestBody @Valid Comment comment) {
        try {
            commentsDao.save( new Comment(comment.message, comment.priority) );
            return true;
        } catch (HibernateException e) {
            return false;
        }
    }

    @PostMapping ("/comment/{id}")
    public boolean editComment(@PathVariable long id, @RequestBody @Valid Comment comment) {
        try {
            Comment oldComment = commentsDao.findOne(id);
            if (oldComment == null || oldComment.deleted) return false;
            comment.creationDate = oldComment.creationDate;
            commentsDao.save(comment);
            return true;
        } catch (HibernateException e) {
            return false;
        }
    }

    @PostMapping ("/delete-comment/{id}")
    public boolean deleteComment(@PathVariable long id) {
        Comment comment = commentsDao.findOne(id);

        if (comment == null)
            return false;

        comment.deleted = true;
        commentsDao.save(comment);
        return true;
    }
}
