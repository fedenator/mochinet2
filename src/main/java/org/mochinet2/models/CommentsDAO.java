package org.mochinet2.models;

import org.springframework.data.repository.CrudRepository;

import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

import java.util.List;

/**
 * Auto implemented by {@link Hibernate}
 */
@Repository
@Transactional
public interface CommentsDAO extends CrudRepository<Comment, Long> {

    @Query("SELECT c FROM Comment c WHERE c.deleted = false")
    public List<Comment> activeComments();
}
