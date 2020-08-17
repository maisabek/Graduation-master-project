package com.backend_main.controller;

import com.backend_main.Repository.*;
import com.backend_main.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import com.backend_main.services.gpsService;

import java.util.*;
@RestController
@RequestMapping(value ="/api")
public class controller {
    @Autowired
    private gpsService service;

    @Autowired
    private studentRepository studentRepository;

    @Autowired
    private requestRepository requestRepository;

    @Autowired
    private userRepository userRepository;

    @Autowired
    private com.backend_main.Repository.degreeRepository degreeRepository;

    @Autowired
    private  schoolRepository schoolRepository;
    @Autowired
    private  activityRepository activityRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/")
    public ResponseEntity<List<GpsEntity>> displaylist(){
        List<GpsEntity> result=service.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/previousLocation")
    public ResponseEntity<List<previousLocation>> getAllPrevious(){
        List<previousLocation> result=service.findPrevious();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Autowired
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users")
    public ResponseEntity<List<user>> displayuser(){
        List<user> allUser=service.findUser();
        return new ResponseEntity<>(allUser, HttpStatus.OK);
    }

    @Autowired
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/student")
    public ResponseEntity<List<student>> displayStudent(){
        List<student> allstudent=service.findStudent();
        return new ResponseEntity<>(allstudent, HttpStatus.OK);
    }

    @Autowired
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/allrequest")
    public ResponseEntity<List<request>> displayRequest(){
        List<request> allrequest=service.findRequest();
        return new ResponseEntity<>(allrequest, HttpStatus.OK);
    }

    @Autowired
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/degree")
    public ResponseEntity<List<degree>> displaydegree(){
        List<degree> allDegree=service.finddegree();
        return new ResponseEntity<>(allDegree, HttpStatus.OK);
    }

    @Autowired
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/school")
    public ResponseEntity<List<school>> displayschool(){
        List<school> allDegree=service.findschool();
        return new ResponseEntity<>(allDegree, HttpStatus.OK);
    }

    @Autowired
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/studentActivity")
    public ResponseEntity<List<activity>> displayactivity(){
        List<activity> allActivity=service.findActivity();
        return new ResponseEntity<>(allActivity, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/addItem")
    public void addItem(){
        service.connect();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/allstudent")
    public ResponseEntity<student> createStudent(@RequestBody student student) {
        try {
            student _tutorial = studentRepository.save(new student(student.getUsername(),student.getEmail(),student.getPassword(),student.getConfirmpassword(),student.getGender(),student.getYeargrad(),student.getCountryname()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/request")
    public ResponseEntity<request> createRequest(@RequestBody request request) {
        try {
            request _tutorial = requestRepository.save(new request(request.getUsername(),request.getEmail(),request.getAddress(),request.getRequ()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/createuser")
    public ResponseEntity<user> createUser(@RequestBody user ser) {
        try {
            int i=0;
//           ser.setIdd(service.getNext(user.SEQUENCE_NAME));
            user _tutorial = userRepository.save(new user(ser.getIdd(),ser.getUsername(),ser.getPassword()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/createSchool")
    public ResponseEntity<school> createSchool(@RequestBody school school) {
        try {
            school _tutorial = schoolRepository.save(new school(school.getId(),school.getEmail(),school.getPassword()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/uploadDegree")
    public ResponseEntity<degree> uploadDegree(@RequestBody degree degree) {
        try {
            int i=0;
//           ser.setIdd(service.getNext(user.SEQUENCE_NAME));
            degree _tutorial = degreeRepository.save(new degree(degree.getIdd(),degree.getName(),degree.getMathDegree(),degree.getAribacDegree(),degree.getEnglishDegree(),degree.getFranceDegree()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/uploadActivity")
    public ResponseEntity<activity> uploadActivity(@RequestBody activity activity) {
        try {
            int i=0;
//           ser.setIdd(service.getNext(user.SEQUENCE_NAME));
            activity _tutorial = activityRepository.save(new activity(activity.getIdd(),activity.getActivity()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }
    //    @Autowired
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updatePass/{idd}")
    public ResponseEntity<user> updateTutorial(@PathVariable("idd") String idd, @RequestBody user users) {
        Optional<user> tutorialData = userRepository.findByIdd(idd);
        if (tutorialData.isPresent()) {
            user user = tutorialData.get();
            user.setPassword(users.getPassword());
            return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }








    @GetMapping("/n/{id}")
    public GpsEntity getbylatitude(@PathVariable String id){
        return service.findbyid(id);
    }
    @PostMapping("/n/create")
    public ResponseEntity<GpsEntity>createnewdata(@Valid @RequestBody GpsEntity t){
        GpsEntity result=service.save(t);
        return new ResponseEntity<GpsEntity>(result, HttpStatus.CREATED);
    }
    public ResponseEntity<Void> delet(@PathVariable String id){
        service.deletebyid(id);
        return new ResponseEntity<>( HttpStatus.NO_CONTENT);
    }
}


