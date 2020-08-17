package com.backend_main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.backend_main.model.previousLocation;
import org.springframework.stereotype.Repository;

@Repository
public interface previousRepostiory extends MongoRepository<previousLocation,String> {
}
