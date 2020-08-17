package com.backend_main.Repository;

import com.backend_main.model.degree;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface degreeRepository extends MongoRepository<degree,String> {
}
