import React from 'react';

const ProjectDetails = ({ project }) => {
    // Assuming project contains details like project_name, project_description, etc.
    return (
        <div>
            <h1>{project.project_name}</h1>
            <p>{project.project_description}</p>
            {/* Other details */}
        </div>
    );
};

export default ProjectDetails;