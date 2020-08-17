package com.backend_main.services;
import com.backend_main.Repository.*;
import com.backend_main.model.*;
import gnu.io.NRSerialPort;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.ws.rs.NotFoundException;
import java.io.DataInputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import java.util.NoSuchElementException;

@Service
public class gpsService {
    @Autowired
    private GpsRepository tR;
    @Autowired
    private  userRepository u;
    @Autowired
    private studentRepository stu;
    @Autowired
    private requestRepository reque;
    @Autowired
    private previousRepostiory previousRepostiory;

    @Autowired
    private degreeRepository degreeRepository;

    @Autowired
    private schoolRepository schoolRepository;

    @Autowired
    private  activityRepository activityRepository;


    private static String port = "/dev/ttyS0";
    @Autowired
    private GpsRepository gpsRepository;
    //    private static String nmeaString = "$PTNLSNM,0002,01*55\r\n";
    // NMEA command to set Copernicus II to output $GPGLL every second.
    //115200
    int baudRate = 9600;
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    //    private BufferedReader input;
    private NRSerialPort serial;

    public List<GpsEntity> findAll(){
        return tR.findAll();
    }

    public List<previousLocation> findPrevious(){
        return previousRepostiory.findAll();
    }
    public List<user> findUser(){ return u.findAll(); }
    public List<student> findStudent(){ return stu.findAll(); }
    public List<request> findRequest(){ return reque.findAll(); }
    public List<degree> finddegree(){ return degreeRepository.findAll(); }
    public List<school> findschool(){ return schoolRepository.findAll(); }
    public List<activity> findActivity(){ return activityRepository.findAll(); }
    //    @Autowired
//    private CounterRepository counterRepository;
//
//    public long getNext(String sequenceId) {
//        Counter counter = counterRepository.findOne(sequenceId);
//        long id = counter.getSeq();
//        counter.setSeq(id + 1);
//        counterRepository.save(counter);
//        return id;
//    }
    /*Adding/inserting an item into collection*/
    public GpsEntity addItem(int idd,double lat,double longi){
        GpsEntity item = new GpsEntity();
        item.setIdd(idd);
        item.setLatitude(lat);
        item.setLongitude(longi);
        return tR.save(item);
    }

    public void connect() {
//        boolean flag=false;
        // String lnPortCmd = "ln -s /dev/ttyAMA0 /dev/ttyS80"; // RXTXComm library uses /dev/ttyS80, so symbolic link needed
//        Process p = Runtime.getRuntime().exec(lnPortCmd);
//        p.waitFor();
        serial = new NRSerialPort(port, baudRate);
        serial.connect();
        if (serial.isConnected()) {
            log.info("Connection opened!");
        } else {
            throw new RuntimeException("Is not possible to open connection in " + port + " port");
        }
        DataInputStream ins = new DataInputStream(serial.getInputStream());
//        DataOutputStream outs = new DataOutputStream(serial.getOutputStream());
        //  byte[] nmeaCmd = nmeaString.getBytes();
        String gpsData = "";
//        try {
//            outs.write(nmeaCmd, 0, nmeaCmd.length);
//        }catch (IOException ex){
//
//        }
        while(true) {
            try {
                if(ins.available() > 0) {
                    int b = ins.read();
                    if(b != 13) {
                        gpsData += (char)b;
                    }
                    else {
                        System.out.println(gpsData);
                        gpsData = gpsData.trim();
                        String[] datum = gpsData.split(",");
                        gpsData = "";
                        // Check for valid $GPGLL NMEA sentence
                        //|| !("$GPGLL").equals(datum[0])
                        //||!("A").equals(datum[6]
                        if(datum.length < 8  || datum[1] == null){
                            continue;
                        }
                        else {
                            LocalDate todayUTC = LocalDate.now(ZoneId.of("UTC"));
//                        String t = datum[5].substring(0,2) + '.';
//                        t += datum[5].substring(2,4) + '.';
//                        t += datum[5].substring(4,6);
                            double lat1=Double. parseDouble(datum[1]);
                            double lng1=Double. parseDouble(datum[3]);
                            GpsEntity item = new GpsEntity();
//                            item.setIdd(i++);
                            item.setLatitude(lat1);
                            item.setLongitude(lng1);
                            gpsRepository.save(item);
////                        service.addItem(i++ ,lat1,lng1);
//                        flag=true;
//                        return flag;
                        }
                    }
                }
            }
            catch (IOException ex){}

        }
    }











    public GpsEntity findbyid(String id){
        try {
            GpsEntity item = new GpsEntity();

            return tR.findOne(id);
        }catch (NoSuchElementException ex){
            throw new NotFoundException(String.format("no record with ip in database",id));
        }
    }
    public student saveStudent(student t1){
        return stu.insert(t1);
    }
    public GpsEntity save(GpsEntity t1){
        return tR.insert(t1);
    }
    public void deletebyid(String id){
        tR.delete(id);
    }
}

