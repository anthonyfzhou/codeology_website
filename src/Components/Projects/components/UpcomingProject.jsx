import React from 'react';
import './project.css';

class UpcomingProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    render() {
        return (
            <div className="project-div">
                <h3 className="project-title">{this.props.title}</h3>
                <p> Technologies used: {this.props.technologies} </p>
                <p> Project Leaders: {this.props.leaders} </p>

                <div className="projects-row">
                    <div className="project-img-cropped-div">
                    <img className="project-img" src={require(`../images/project-photos/${this.props.imageSrc}`)} alt="projectImg"/>
                    </div>
                    
                    <p className="project-description">
                        {this.props.description}
                    </p>


                </div>
            </div>
        );
    }
}

export default UpcomingProject;
