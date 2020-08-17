package com.backend_main.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "activity")
public class activity {
    String idd;
    String activity;
    public activity(){}
    public activity(String idd,String activity){
        this.idd=idd;
        this.activity=activity;
    }

    public String getIdd() {
        return idd;
    }

    public void setIdd(String idd) {
        this.idd = idd;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }
}
