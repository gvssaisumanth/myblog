import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Notifications extends Component {

 
  render() {
    if(this.props.auth)return(<Redirect to='/signIn'/>)
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="online-users">
              { this.props.notifications && this.props.notifications.map(item =>{
                return <li key={item.id}>
                  <span className="pink-text">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
    

  }
}


const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth.isEmpty,
    notifications:state.firestore.ordered.notifications,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'notifications',limit:5,orderBy:['time','desc']}
  ])
)(Notifications)

