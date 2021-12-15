import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
    const { id } = useParams()
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, natus, quasi perspiciatis mollitia cupiditate asperiores nesciunt aspernatur voluptatem consectetur fugiat eaque vero minima ducimus delectus! Deserunt vitae mollitia tempora quae.</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by:</div>
                        <div>2nd September, 2AM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
