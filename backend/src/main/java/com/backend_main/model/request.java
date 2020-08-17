package com.backend_main.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="request")

public class request {
    @Id
    private String id;
    private String username;
    private String email;
    private String address;
    private String requ;

    public request(){}

    public request(String UserName,String Email,String address,String requ){
        this.username=UserName;
        this.email=Email;
        this.address=address;
        this.requ=requ;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRequ() {
        return requ;
    }

    public void setRequ(String requ) {
        this.requ = requ;
    }
}
