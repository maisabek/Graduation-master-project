package com.backend_main.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection="student")
public class student {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String confirmpassword;
    private String gender;
    private String yeargrad;
    private String countryname;

    public student(){}

    public student(String UserName,String Email,String Password,String ConfirmPassword,String gender,String year,String country){
        this.username=UserName;
        this.email=Email;
        this.password=Password;
        this.confirmpassword=ConfirmPassword;
        this.gender=gender;
        this.yeargrad=year;
        this.countryname=country;
    }

    public String getId(){return id;}
    public void setId(String id) {this.id = id;}

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getYeargrad() {
        return yeargrad;
    }
    public void setYeargrad(String yeargrad) {
        this.yeargrad = yeargrad;
    }


    public String getCountryname() {
        return countryname;
    }
    public void setCountryname(String countryname) {
        this.countryname = countryname;
    }

//    @Override
//    public String toString() {
//        return "student [id=" + id + ", UserName=" + UserName + ", Password=" + Password + ", ConfirmPassword=" + ConfirmPassword + ", gender=" + gender + ", year=" + year +", country=" + country + "]";
//    }


}

