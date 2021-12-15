import React from 'react'
import { useSelector } from 'react-redux'

import Notification from './Notification'
import ProjectList from '../projects/ProjectList'

const Dashboard = () => {
    const { project } = useSelector(state => state.project)
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={project}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
    )
}

export default Dashboard