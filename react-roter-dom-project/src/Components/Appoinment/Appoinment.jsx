import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Appoinment = () => {

  const doctorNameRef=useRef()
  const feeRef=useRef()
  const doctorAddressRef=useRef()
  const patientNameRef=useRef()
  const telephoneRef=useRef()
  const patientAddressRef=useRef()
  const dateRef=useRef()



 


  const {id}=useParams()
  const [doctor,setDoctor]=useState({})

  useEffect(()=>{

    fetch(`https://my-json-server.typicode.com/nazim725/Doctors/posts/${id}`)
    .then(res=>res.json())
    .then(data=>setDoctor(data))

  },[])

  function handleAppoinment(e){


    const doctorName=doctorNameRef?.current?.value
    const fee=feeRef?.current?.value
    const doctorAddress=doctorAddressRef?.current?.value
    const patientName=patientNameRef?.current?.value
    const patientAddress=patientAddressRef?.current?.value
    const date=dateRef?.current?.value
  
    const appoinment={doctorName,fee,doctorAddress,patientName,patientAddress,date}

    fetch("https://guarded-tundra-04860.herokuapp.com/orders",{
      method:"post",
      headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(appoinment)

    })
    .then(res=>res.json())
    .then(data=>{

      if(data.insertedId){
        alert('Successfully Booking Your Appoinment')
        e.target.reset();

      }
    })






    e.preventDefault()


  }
  
    
    return (
        <div>
            <Form onSubmit={handleAppoinment}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor Name</Form.Label>
        <Form.Control type="text" value={doctor?.name} ref={doctorNameRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fee</Form.Label>
        <Form.Control type="text" value={doctor?.fee} ref={feeRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" value={doctor?.address} ref={doctorAddressRef}/>
      </Form.Group>
      <hr />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your name" ref={patientNameRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="text" placeholder="Enter Telephone No" ref={telephoneRef} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Adress</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Address" ref={patientAddressRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date and Time</Form.Label>
        <Form.Control type="text" placeholder="Enter Date and time"  ref={dateRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Appoinment;