package com.backend_main.Repository;

import com.backend_main.model.activity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface activityRepository extends MongoRepository<activity,String> {
}
