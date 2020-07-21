import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser'
import './techDetails.css'

const TechDetails = (props) => {
  if(props.auth)return(<Redirect to='/signIn'/>)
  const { project } = props;
  if (project) {
    return (
      <div className="style"style={{textAlign:"center"}}>
        <div className="card z-depth-0" style={{textAlign:"justify"}}>
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{ReactHtmlParser(project.content)}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading posts for you...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const auth=state.firebase.auth.isEmpty;
  const projects = state.firestore.data.tech;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth:auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'tech',
  }])
)(TechDetails)