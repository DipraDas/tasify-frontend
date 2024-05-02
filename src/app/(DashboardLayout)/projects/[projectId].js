import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const ProjectDetails = () => {
    const router = useRouter();
    const [specificProjectData, setSpecificProjectData] = useState(null);

    useEffect(() => {
        if (router.query.project) {
            const projectData = JSON.parse(router.query.project);
            setSpecificProjectData(projectData);
        }
    }, [router.query.project]);

    return (
        <div>
            {specificProjectData && (
                <>
                    <h1>Project Name : {specificProjectData.project_name}</h1>
                    <p>Project Description : {specificProjectData.project_description}</p>
                    <p>About : {specificProjectData.about}</p>
                    <p>About : {specificProjectData.about}</p>
                </>
            )}
        </div>
    );
};

export default ProjectDetails;
