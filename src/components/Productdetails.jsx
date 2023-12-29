import React from "react";
import { Button, Col, Row } from 'react-bootstrap';
import { useLocation } from "react-router-dom";


export default function Productdetails(){
    const location = useLocation();
    const product = location.state;
    const {title, price ,images, description }= location.state;
    return(
        <div style={{padding:70}}>
            <Row>
                <Col lg={2}>
                    <div>
                        {images.map(image =>{
                            return(
                                <img src={image} width={150} style={{marginBottom:20,borderRadius:8}}/>
                            )
                        })}
                    </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <img src={images[0]} width={300} style={{marginBottom:20,borderRadius:8}}/>
                        <h4>{title}</h4>
                        <h3 style={{color:'#216ad9'}}>${price}</h3>
                        <div>{description}</div>
                        <Button style={{marginTop:30}}>Add To Cart</Button>
                    </div>
                </Col>
                <Col lg={5}>
                    <div>other products</div>
                </Col>
            </Row>
        </div>
    )
}