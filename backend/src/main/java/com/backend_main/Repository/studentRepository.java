package com.backend_main.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.backend_main.model.student;

@Repository
public interface studentRepository extends MongoRepository<student,String> {
}