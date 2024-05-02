import React from 'react';
import Link from 'next/link';

const ProductCard = ({ project, deleteProject }) => {
    const { project_id, project_name, project_description } = project;

    return (
        <div className='border border-1 mb-5 border-gray-300 px-5 py-5 rounded-2xl bg-white'>
            <p className='text-gray-400 text-xs tracking-wide'>Project Name</p>
            <p className='text-gray-700 text-xl  tracking-wide'>{project_name}</p>
            <p className='text-gray-400 text-xs tracking-wide mt-3'>Project Description</p>
            <p className='text-gray-700 text-base  tracking-wide'>{project_description}</p>
            <div className='flex gap-5 mt-4'>
                <Link href={`/projects/${project_id}`}>
                    <p class="text-violet-500 px-3 py-1 border border-violet-400 rounded-md">View</p>
                </Link>
                {/* <p class="text-sky-600 px-3 py-1 border border-sky-400 rounded-md cursor-pointer">Edit</p> */}
                <p class="text-white px-3 py-1 border border-red-600 bg-red-600 rounded-md cursor-pointer"
                    onClick={() => deleteProject(project_id)}>
                    Delete
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
