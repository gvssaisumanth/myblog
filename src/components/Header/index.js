import React,{Component} from 'react'
import { Link,NavLink } from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {connect} from 'react-redux'
import { signOut } from '../../store/actions/authActions'


class Header extends Component{

  state={
    show:false
  }

  
  signIn=()=>
  { 
    this.setState({show:false})
    return(
    <Link to="/signIn">
    </Link>)
  }
  signOut=()=>
  { this.setState({isEmpty:true})
    this.props.signOut()
   
  }

  render(){
    return(
    <div>
     <Navbar collapseOnSelect expand="xl" bg="dark" variant="light">
        <Navbar.Brand href="/" style={{fontFamily:"'Metal Mania', 'cursive'", color:"#fff",
            textShadow: "0px -1px 4px white, 0px -2px 10px yellow, 0px -10px 20px #ff8000, 0px -18px 40px red",fontSize: "40px"}}>
           GVS BLOGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar bg="dark" variant="dark"  style={{ position:"relative", zIndex: "1000"}} >
      <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
      {!this.props.auth.isEmpty ? <Nav.Link href="/notifications">Notifications</Nav.Link>:" "}
      <NavDropdown title="Options" id="collasible-nav-dropdown" style={{ position:"relative", zIndex: "1000"}}>
        {this.props.auth.isEmpty? <NavDropdown.Item onClick={this.signIn}>LogIn</NavDropdown.Item>
        :<div><NavDropdown.Item onClick={this.props.signOut} >Logout</NavDropdown.Item></div>}
        {!this.props.auth.isEmpty ? <div>
          <NavDropdown.Item href="/create">create Project</NavDropdown.Item></div>
        :<NavDropdown.Item href="/signUp">
        SignUp</NavDropdown.Item>}
        </NavDropdown>  <NavLink to='/' className="btn btn-floating pink lighten-1">
          {this.props.profile.initials ? this.props.profile.initials:"blogs"}
        </NavLink>   
    </Navbar>
    
    </Navbar.Collapse>
    
    </Navbar></div>
    )
 
}

}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

const mapStateToProps=(state)=>{
  
  return{
    auth: state.firebase.auth,
    profile:state.firebase.profile
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)



