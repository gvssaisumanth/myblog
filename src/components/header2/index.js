import React from 'react';
import './style.css'
import Card from '../UI/Card';
import Logo from '../Logo';
const Books = (props) => {
    return(
      <div style={{textAlign:"center",padding:"10px"}}>
        <br/>
        <Card className="headercard">
          <div style={{padding:"10px"}}>
            <Logo></Logo></div>
        </Card>
      </div>
    )
}
   
export default Books;