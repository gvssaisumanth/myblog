import React,{useState} from 'react';
import Card from '../../components/UI/Card';
import {Link} from 'react-router-dom';
import './style.css'
import {Row,Col,Button,Modal} from 'react-bootstrap'

const AboutUs = (props) =>{

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    return (
        <div  style={{textAlign:"center",content:"justify"}}>
            <br/>
        <Row>
            <Col xs={12} md={8}>
         <Card style={{padding:"10px",marginBottom:"60px",width:"100%"}} >
                 <h3>About Blog</h3>
                 <h5>Konwledge decides <b>what to say</b> </h5>
                 <h5>Skill decides<b> how to say</b></h5>
                 <h5>Attitude decides<b> how much to say</b></h5>
                 <h5>Wisdom decides<b> whether to say or not</b></h5>
                 <div style={{textAlign:"center"}}>
             <img className="photo" src={require('../../assests/Images/ratantata.jpg')}alt="AboutUs"/></div>
                <br/>            
                This blog for book reading enthusiast's ...A place for knowledge sharing<br/>
                May that be of any field...<br/>
                <div style={{textAlign:"center"}}>
                <img className="myphoto" src={require('../../assests/icon/Love.png')} alt="simley"></img></div>
                </Card> </Col>
            <Col xs={12} md={4}>
            <Card style={{padding:"10px", width:"100%"}}>
            <h3 style={{textAlign:"center"}}>About Admin</h3><br/>
            <h3>Admin:{" "}GVS</h3>
            <div style={{textAlign:"center"}}>
            <img className="myphoto" src={require('../../assests/Images/mypic.jpg')}></img>
            <h3>That's me for you :)</h3></div><br/>
            <p>I am a human being to start with ....<br/>
            I love reading stuff which makes one think twice as in which makes a point You will get to know 
            my taste once you dive into my books category.
            Anime is also one of my intrest..I will describe my favourite characters..
            I have atmost interest on latest technology starting from Graphene to Quantum computing via AI, ML , DL and so..on...
            <br/>
            ...As of now these two will be the categories on this blog Later will add
            <br/>
            As every one has a wishful thought so do I ....my wishful thought is to see the whole world understand that
             we all are one kind <b> humankind</b> ....<br></br>
             <h3 style={{textAlign:"center"}}>happy Reading....</h3>
            </p>
            <Button variant="primary" onClick={handleShow}>Contact Info</Button>
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>mail Id: {" "} gvsss0508@gmail.com<br/>
            <a target="blank" href="https://www.instagram.com/gvsss_3">InstaId: gvsss_3</a> </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
              </Modal>
            </Card>
        </Col>
     </Row>
  </div>

        
)};
export default AboutUs;