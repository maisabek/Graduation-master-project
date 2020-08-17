package com.backend_main.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Document(collection ="gpsData")
public class GpsEntity {
    private int idd;
    @NotNull
    private  double latitude;
    @NotNull(message = "longitude is required")
    private  double longitude;
    @Size(min = 6,message = "must at least 3 char")
    private long timestaps;
    public GpsEntity(){
//        this.timestaps=System.currentTimeMillis();
    }
    public  GpsEntity(int idd,double latitude,double longitude) {
        this.idd=idd;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public void setIdd(int idd) {
        this.idd = idd;
    }
    public int getIdd() {
        return idd;
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