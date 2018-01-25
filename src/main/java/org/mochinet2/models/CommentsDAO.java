package org.mochinet2.models;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Auto implemented by {@link Hibernate}
 */
@Repository
@Transactional
public interface CommentsDAO extends CrudRepository<Comment, Long> {

}
