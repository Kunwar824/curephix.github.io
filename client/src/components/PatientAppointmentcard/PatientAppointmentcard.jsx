import React from 'react'
import "./PatientAppointmentcard.css";
import { WhatsappShareButton } from 'react-share';

const PatientAppointmentcard = (prop) => {
  


 
  return (
    <>
    <div className="PatientAppointmentcard" id='printablediv'>
      <div className="Patientappointmentslip"><h3>Appointment Slip</h3></div>
       
        <div className="patientinfo">
            <span style={{marginTop:"12px",display:"block",color:"black", fontSize:"18px"}}>{prop.name}</span>
            <span style={{marginTop:"8px",display:"block",color:"black", fontSize:"18px"}}>{prop.age} year</span>
            <span style={{marginTop:"8px",display:"block",color:"black", fontSize:"18px"}}>{prop.gender}</span>
            <span style={{marginTop:"8px",display:"block",color:"black", fontSize:"18px"}}>7706821016</span>
        </div>
       
        <div className="doctorinformation"><span style={{marginTop:"12px",display:"block",color:"black", fontSize:"18px"}}>Dr.{prop.doctor}</span>
        <span style={{marginTop:"8px",display:"block",color:"black", fontSize:"18px"}}>MBBS,MD</span>
        <span style={{marginTop:"8px",display:"block",color:"black", fontSize:"16px"}}>Neurologist</span><span style={{marginTop:"8px",display:"block",color:"black", fontSize:"16px"}}>Shri Ram Clinic</span><span style={{marginTop:"8px",display:"block",color:"black", fontSize:"16px"}}>Address</span>
        <span style={{marginTop:"8px",display:"block",color:"black", fontSize:"18px"}}>9838730518</span></div>
        <div className="PatientAppointmenttime">
            <span style={{marginTop:"8px",display:"block", fontSize:"18px"}}>{prop.appointmentdate}</span>
            <span style={{marginTop:"8px",display:"block", fontSize:"18px"}}>Tuesday</span>
            <span style={{marginTop:"8px",display:"block", fontSize:"18px"}}>8:00-10:00 A.M</span>
        </div>
        
       
    </div>
    
    </>
  )
}

export default  PatientAppointmentcard;
