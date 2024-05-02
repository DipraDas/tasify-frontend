"use client"

import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '@/app/Redux/projects/projects';
import ProductCard from '@/app/components/ui/product/ProductCard';

const Project = () => {
    const dispatch = useDispatch();
    const projectsData = useSelector((state) => state.project.projects);

    // Fetch project data and store it in Redux state
    useQuery({
        queryKey: ['projectData'],
        queryFn: async () => {
            const response = await fetch('/project.JSON');
            const data = await response.json();
            dispatch(setProjects(data));
            return data;
        }
    });

    const deleteProject = (project_id) => {
        const newProjectData = projectsData.filter(project => project.project_id !== project_id);
        dispatch(setProjects(newProjectData));
    }

    return (
        <div className='px-10 mt-10'>
            <h1 className='text-3xl mb-5'>All Projects</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    projectsData.map((project, index) => (
                        <div key={index}>
                            <ProductCard project={project} deleteProject={deleteProject} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Project;



// Define Zustand store outside of the component
// const useStore = create((set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     decrement: () => set((state) => ({ count: state.count - 1 })),
//     reset: () => set({ count: 0 }),
// }));




// Access the store state and methods
// const count = useStore((state) => state.count);
// const increment = useStore((state) => state.increment);
// const decrement = useStore((state) => state.decrement);
// const reset = useStore((state) => state.reset);

{/* <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button> */}


{/* <div>
    <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
    >
        Increment
    </button>
    <span>{count}</span>
    <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
    >
        Decrement
    </button>
</div> */}