import React, { Component } from 'react'
import ProjectList from '../ProjectList/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class books extends Component {
  render() {
    if(this.props.auth) return(<Redirect to='/signIn'/>)
    const { projects } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>

        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.books,
    auth:state.firebase.auth.isEmpty
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'books' ,orderBy:['createdAt','desc']}
  ])
)(books)

