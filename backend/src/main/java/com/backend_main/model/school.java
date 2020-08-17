package com.backend_main.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "school")
public class school {
    String id;
    String email;
    String password;
    public  school(){}
    public school(String id,String email,String password){
        this.id=id;
        this.email=email;
        this.password=password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
