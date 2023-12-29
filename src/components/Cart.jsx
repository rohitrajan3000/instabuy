import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import CartImage from '../assets/6.png';


export default function Cart({cartItems}) {
    
    console.log(cartItems)
    const [totalPrice, setTotalprice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const navigate = useNavigate();


    useEffect(() => {
        let tempPrice =0;
        let tempQuantity =0;
        Object.keys(cartItems).map((cartItemId) =>{

            const details = cartItems[cartItemId];
            tempQuantity += details.quantity;
            tempPrice += details.quantity * details.price;
        })

        setTotalQuantity(tempQuantity);
        setTotalprice(tempPrice);
    },[])


    return (
        <div style={{margin:60}}>
            <h3>Your Cart</h3>
            <Row>
                <Col>
                    
                    <Table style={{marginTop: 40}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cartItems).map((cartItemId)=>{
                                const itemDetails = cartItems[cartItemId];
                                return(
                                    <tr>
                                        <td>{itemDetails.title}</td>
                                        <td>{itemDetails.quantity}</td>
                                        <td>{itemDetails.quantity * itemDetails.price}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td>total</td>
                                <td>{totalQuantity}
                                </td>
                                <td>{totalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={() => navigate('/Checkout')}>Cheak out</Button>

                </Col>
                <Col>
                <img src={CartImage} height={500} />
                </Col>
            </Row>


        </div>

    )
}