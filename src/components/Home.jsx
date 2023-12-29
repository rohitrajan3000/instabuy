import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CarouselOneImg from '../assets/1.png';
import CarouselTwoImg from '../assets/4.png';
import CarouselThreeImg from '../assets/5.png';


import { useNavigate } from "react-router-dom";
import companyimgone from '../assets/10.png';
import companyimgtwo from '../assets/11.png';
import companyimgthree from '../assets/12.png';
import companyimgfour from '../assets/13.png';
import companyimgfive from '../assets/14.png';
import companyimgsix from '../assets/15.png';


export default function Home(){
    const navigate = useNavigate();
    const handleCTAClick = () => {
        if(user){
            // navigate to products page
        }else{
            navigate('/login')
        }
    }
    return(
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:100}}>
                            <h1 style={{ fontWeight:700}}><i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color:'#216ad9', fontWeight:700}}><i>STYLE</i></h1>
                            <h4 style={{marginBottom:20}}>Shop with latest trendy product</h4>
                            <div>
                                <Button style={{width:250}} onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                                <h3 style={{marginTop : 10}}>Products available from :</h3>
                                <img src={companyimgone} style={{height:50}}/>
                                <img src={companyimgtwo} style={{height:50}}/>
                                <img src={companyimgthree} style={{height:50}}/>
                                <img src={companyimgfour} style={{height:50}}/>
                                <img src={companyimgfive} style={{height:50}}/>
                                <img src={companyimgsix} style={{height:50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src={CarouselOneImg} style={{height:'80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:100}}>
                            <h1 style={{ fontWeight:700}}><i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color:'#216ad9', fontWeight:700}}><i>STYLE</i></h1>
                            <h5>Shop with latest trendy product</h5>
                            <div>
                                <Button style={{width:250}} onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                                <h3 style={{marginTop : 10}}>Products available from :</h3>
                                <img src={companyimgone} style={{height:50}}/>
                                <img src={companyimgtwo} style={{height:50}}/>
                                <img src={companyimgthree} style={{height:50}}/>
                                <img src={companyimgfour} style={{height:50}}/>
                                <img src={companyimgfive} style={{height:50}}/>
                                <img src={companyimgsix} style={{height:50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src ={CarouselTwoImg}style={{height:'80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:100}}>
                            <h1 style={{ fontWeight:700}}><i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color:'#216ad9', fontWeight:700}}><i>STYLE</i></h1>
                            <h5>Shop with latest trendy product</h5>
                            <div>
                                <Button style={{width:250}} onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                                <h3 style={{marginTop : 10}}>Products available from :</h3>
                                <img src={companyimgone} style={{height:50}}/>
                                <img src={companyimgtwo} style={{height:50}}/>
                                <img src={companyimgthree} style={{height:50}}/>
                                <img src={companyimgfour} style={{height:50}}/>
                                <img src={companyimgfive} style={{height:50}}/>
                                <img src={companyimgsix} style={{height:50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src ={CarouselThreeImg} style={{height:'80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}