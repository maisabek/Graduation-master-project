package com.backend_main.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "previousLocation")
public class previousLocation {

    String idd;
    double latitude;
    double longitude;

    public previousLocation(double latitude,double longitude){
        this.latitude=latitude;
        this.longitude=longitude;
    }

    public String getIdd() {
        return idd;
    }

    public void setIdd(String idd) {
        this.idd = idd;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
