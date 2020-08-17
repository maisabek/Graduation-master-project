package com.backend_main.Repository;
import com.backend_main.model.user;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface userRepository extends MongoRepository<user,String> {
    Optional<user> findByIdd(String idd);
}
