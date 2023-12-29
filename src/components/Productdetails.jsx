import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";


export default function Productdetails({cartItems, handleAddtocart}) {
    const location = useLocation();
    const product = location.state;
    const { title, price, images, description, category,id } = location.state;

    const [otherProducts, setOtherProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/3/products?limit=20&offset=0`);

            setOtherProducts(response.data);
        }
        getData();
    }, [])

    return (
        <div style={{ padding: 70 }}>
            <Row>
                <Col lg={2}>
                    <div>
                        {images.map((image, index) => {
                            return (
                                <img key={index} src={image} width={150} style={{ marginBottom: 20, borderRadius: 8 }} />
                            )
                        })}
                    </div>
                </Col>
                <Col lg={4}>
                    <div>
                        <img src={images[0]} width={300} style={{ marginBottom: 20, borderRadius: 8 }} />
                        <h4>{title}</h4>
                        <h3 style={{ color: '#216ad9' }}>${price}</h3>
                        <div>{description}</div>
                        <Button style={{ marginTop: 30 }} onClick={()=>{
                            if(id in cartItems){
                                const currentItem = cartItems[id];
                                handleAddtocart({[id]:{title,price,quantity:currentItem.quantity +1}});
                            }else{
                                handleAddtocart({[id]:{title,price,quantity: 1}});
                            }
                            navigate('/cart')
                        }}>Add To Cart</Button>
                    </div>
                </Col>
                <Col>
                    <h2>Other Products</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        
                        {otherProducts.map((product) => {
                            if(product.id ==id)return
                            return (
                                <Card key={product.id} style={{ width: '8rem', border: 'none', margin: 10 }}>
                                    <Card.Img src={product.images[0]} />
                                    <Card.Title>{product.title.split(" ")[0]}</Card.Title>
                                    <Card.Text>$ {product.price}</Card.Text>
                                    <Button onClick={() => navigate(`/product/${product.id}`, { state: product })} style={{ width: 120 }}>View Item</Button>
                                </Card>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}