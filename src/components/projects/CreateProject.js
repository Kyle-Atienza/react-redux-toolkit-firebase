import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProject } from '../../store/reducers/projectReducer'


function CreateProject() {  
  const dispatch = useDispatch();
  const [projectTitle, setProjectTitle] = useState('')
  const [projectContent, setProjectContent] = useState('')

  const {projects} = useSelector(state => state.project)
  const newProject = {
    id: `${projects.length + 1}`,
    title: projectTitle,
    content: projectContent
  }

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">
              Title
          </label>
          <input 
            type="text" 
            id="title" 
            onChange={(e) => setProjectTitle(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">
              Project Content
          </label>
          <textarea 
            id="content" 
            className="materialize-textarea" 
            onChange={(e) => setProjectContent(e.target.value)}></textarea>
        </div>
        <div className="input-field">
          <button 
            onClick={() => dispatch(createProject(newProject))} 
            className="btn pink lighten-1 z-depth-0">
              Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateProject
