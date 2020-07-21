import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom'
import {Dropdown,DropdownButton} from 'react-bootstrap'
import './projectstyle.css'

class CreateProject extends Component {
  state = {
    title: '',
    subject:'',
    content: '',
    category:"",
    
  }

  handleOnChange=(e,editor)=>{
    const data=editor.getData()
    this.setState({content:data})
    
}
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleChange2 = (e) => {
    this.setState({
      subject: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push(`/${this.state.category}`);
  }
  category1=()=>
  {
    this.setState({category:"books"})
  }

  category2=()=>
  {
    this.setState({category:"anime"})
  }

  category3=()=>
  {
    this.setState({category:"tech"})
  }
  render() {
    const config= {toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'Link',
        '|',
        'numberedList',
        '|',
        'blockquote',
        '|',
        'undo',
        'redo',
        '|',
        

        
      ]
    },
    paragraph:{

      groups: [ 'list', 'indent', 'blocks', 'align', 'bidi','fontSize' ] },
    align:{
      groups:['FontSize','JustifyLeft', 'JustifyCenter', 'JustifyRight']
    },
    language: 'en',
  }
    if(this.props.auth)return(<Redirect to="/signIn"/>)
    return (
      <div className="style" style={{textAlign:"Center",padding:"15px",content:"justify"}}>
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' required onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <DropdownButton id="dropdown-item-button" title="Category">
            <Dropdown.Item eventKey="books" onClick={this.category1}>Books</Dropdown.Item>
            <Dropdown.Item eventKey="anime"onClick={this.category2}>Anime</Dropdown.Item>
            <Dropdown.Item eventKey="tech" onClick={this.category3}>Tech</Dropdown.Item>
          </DropdownButton>
          <div className="input-field">
          <textarea id="category" className="materialize-textarea" placeholder="select from dropdown" value={this.state.category}></textarea></div>
          <div>
          <div className="input-field">
            <input type="text" id='title' required onChange={this.handleChange2} />
            <label htmlFor="subject">Project Subject</label>
          </div>
          <h5 className="grey-text text-darken-3">Blog Post Content</h5>
          <CKEditor
            editor={ClassicEditor}
            onChange={this.handleOnChange}
            config={config}
            >
            </CKEditor>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps =(state)=>
{
  return{
    auth:state.firebase.auth.isEmpty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)