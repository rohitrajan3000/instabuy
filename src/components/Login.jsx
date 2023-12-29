import { Button, Col, Form, Row } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from '../assets/2.png';

export default function Login({setUser}) {
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
                                   
                                    <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button onClick={()=>{
                                    localStorage.setItem('userEmail',email);
                                    setUser(email)
                                    navigate('/')
                                }} style={{width:'100%', borderColor:'white', marginBottom:'1 0px'}} variant="primary" type="submit">
                                    Submit
                                </Button>
                                <div style={{color:'white'}}> 
                                    Join the club, <a style={{color: 'white'}} href="/Signup">click here</a>
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