import { Button, Col, Form, Row } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from '../assets/3.png';


export default function Signup({setUser}) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    return (
        <div style={{ background: '#216ad9', padding:'20px' }}>
            <Row >
                <Col>
                    <div style={{ padding: 100 }}>
                        <h1 style={{ color: 'white' }}>InstaBuy!</h1>
                        <h3 style={{ color: 'white' }}>One place for all</h3>
                        <Form style={{marginTop:'20px'}}>
                            <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
                                <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                                   
                                    <Form.Control type="email" onChange={(e)=>setEmail(e.currentTarget.value)} placeholder="Enter User Name" />

                                </Form.Group>
                                <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                                   
                                    <Form.Control type="email" placeholder="Enter Password" />

                                </Form.Group>

                                <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="password" placeholder="Enter Full Name" />
                                </Form.Group>

                                <Button 
                                onClick={()=>{
                                    localStorage.setItem('userEmail',email);
                                    setUser(email)
                                    navigate('/')
                                }}style={{width:'100%', borderColor:'white', marginBottom:'1 0px'}} variant="primary" type="submit">
                                    Join The Club
                                </Button>
                                <div style={{color:'white'}}> 
                                    Already a member?, <a style={{color:'white'}} href="./Login">click here</a>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <img src={loginimg} style={{height:'600px'}}/>
                </Col>
            </Row>
        </div>
    )
}