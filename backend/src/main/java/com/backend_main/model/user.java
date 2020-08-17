package com.backend_main.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

@Document(collection ="user")
public class user {
    //    @Transient
//    public static final String SEQUENCE_NAME = "users_sequence";
//@Id
    private String idd;
    private String username;
    private String password;
    public user(){}
    public user(String idd,String userName,String password){
        this.idd=idd;
        this.username=userName;
        this.password=password;
    }

    public void setIdd(String idd) {
        this.idd = idd;
    }
    public String getIdd() {
        return idd;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

