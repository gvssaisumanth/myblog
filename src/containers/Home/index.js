import React, {Component} from 'react'
import './style.css'
 import Card from  '../../components/UI/Card/index'
 import {Row,Col,Button} from 'react-bootstrap'
 import {Link, Redirect} from "react-router-dom"
 import {connect} from 'react-redux'
import { auth } from 'firebase'



class Home extends Component{

    showListbooks=()=>
    {
        return(
        <Link to="/books">
            <Button> Enter the Book world..</Button>
        </Link>)
    }

    showListanime=()=>
    {
        return(
        <Link to="/anime">
            <Button> Enter the Anime world..</Button>
        </Link>)
    }
    showListtech=()=>
    {
        return(
        <Link to="/tech">
            <Button> Enter the Tech world..</Button>
        </Link>)
    }

   render()
   {
       if(this.props.auth) return(<Redirect to="/signIn"></Redirect>)
    else
    {
    return(
        
        
          <div style={{textAlign:"center",padding:"5px"}}>
            <br></br>
            
            <Row>
             <Col xs={12} md={4} >
          
            <Card style={{ padding:"25px" ,width:"100%"}} >
            <img className="photo" src={require('../../assests/Images/books.jpg')}alt="AboutUs"/>
                <h2 className="grey-text text-darken-3">This is Books Category</h2>
                <p>
                    Summary of Books we read
                </p> {this.showListbooks()}
            </Card></Col>
            <br/>
            <Col xs={12} md={4}  >
            <Card style={{padding:"25px",width:"100%"}}>
            <img className="photo" src={require('../../assests/Images/Anime.png')}alt="AboutUs"/>
            <h2 className="grey-text text-darken-3">This is Anime Category</h2>
                <p>
                    My favourite charecter disected
                </p>{this.showListanime()}
            </Card></Col>
            <br/>
            <Col xs={12} md={4} >
            <Card style={{padding:"25px",width:"100%"}}>
            <img className="photo" src={require('../../assests/Images/Tech.jpg')}alt="AboutUs"/>
            <h2 className="grey-text text-darken-3">This is Tech. Category</h2>
                <p>
                    Covering Advancements of tech
                </p>{this.showListtech()}
            </Card></Col>
            </Row>
        </div>
    )}
   }
}

const mapStateToProps =(state)=>{

    return{
        auth:state.firebase.auth.isEmpty
    }
}

export default connect(mapStateToProps)( Home)