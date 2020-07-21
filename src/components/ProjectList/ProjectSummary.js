import React from 'react'
import moment from 'moment'
import './projectstyle.css'

const ProjectSummary = ({project}) => {
  return (
    <div className="style">
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "><h4>{project.title}</h4></span>
        <p><h6><b>Category </b>:{project.category}</h6></p>
        <p><h6><b>Subject </b>:{project.subject}</h6></p>
        <br/>
        <p> Posted By <h5>{project.authorFirstName} {project.authorLastName}</h5></p>
  <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
    </div>
  )
}

export default ProjectSummary