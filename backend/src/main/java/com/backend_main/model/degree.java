package com.backend_main.model;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="degree")
public class degree {
    String idd;
    String name;
    String mathDegree;
    String aribacDegree;
    String englishDegree;
    String franceDegree;
    public degree(){}
    public degree(String idd,String name,String mathDegree,String aribacDegree,String englishDegree,String franceDegree){
        this.idd=idd;
        this.name=name;
        this.mathDegree=mathDegree;
        this.aribacDegree=aribacDegree;
        this.englishDegree=englishDegree;
        this.franceDegree=franceDegree;
    }
    public String getIdd() {
        return idd;
    }
    public void setIdd(String idd) {
        this.idd = idd;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMathDegree() {
        return mathDegree;
    }

    public void setMathDegree(String mathDegree) {
        this.mathDegree = mathDegree;
    }

    public String getAribacDegree() {
        return aribacDegree;
    }

    public void setAribacDegree(String aribacDegree) {
        this.aribacDegree = aribacDegree;
    }

    public String getEnglishDegree() {
        return englishDegree;
    }

    public void setEnglishDegree(String englishDegree) {
        this.englishDegree = englishDegree;
    }

    public String getFranceDegree() {
        return franceDegree;
    }

    public void setFranceDegree(String franceDegree) {
        this.franceDegree = franceDegree;
    }
}
