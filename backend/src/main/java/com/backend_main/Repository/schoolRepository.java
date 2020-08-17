package com.backend_main.Repository;

import com.backend_main.model.school;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface schoolRepository extends MongoRepository<school,String> {
}
