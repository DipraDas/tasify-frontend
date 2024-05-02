
'use client'
import { addTaskToProject } from '@/app/Redux/projects/projects';
import { DatePicker, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProjectDetails = ({ params }) => {

    const dispatch = useDispatch();

    const projectsData = useSelector((state) => state.project.projects);
    const [specificProjectData, setSpecificProjectData] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [deadline, setDeadline] = useState(null);

    const onChange = (date, dateString) => {
        setDeadline(date);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        const newTask = {
            taskName,
            taskDescription,
            deadline: deadline.format('YYYY-MM-DD'),
            status: 'To-Do',
        };

        const projectId = params.projectId[0];
        dispatch(addTaskToProject({ projectId, newTask }));

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const projectId = params.projectId[0];
        const project = projectsData.find(project => project.project_id === projectId);
        setSpecificProjectData(project);
    }, [projectsData]);

    return (
        <>
            <div className='mt-8 px-8'>
                {
                    specificProjectData && (
                        <>
                            <div className='flex items-center justify-between mb-8'>
                                <span className='text-3xl'>{specificProjectData.project_name}</span>
                                <span onClick={showModal} className='py-2 px-5 bg-violet-600 text-white rounded-lg cursor-pointer'>
                                    Add Task
                                </span>
                            </div>
                            <div className='grid grid-cols-8 mb-4'>
                                <p className='col-span-1 text-base font-semibold'>About:</p>
                                <p className='col-span-7 text-gray-600'>{specificProjectData.about}</p>
                            </div>
                            <div className='grid grid-cols-8 mb-4 items-center'>
                                <p className='col-span-1 text-base font-semibold'>Project Description :</p>
                                <p className='col-span-7 text-gray-600'>{specificProjectData.project_description}</p>
                            </div>
                            <div className='grid grid-cols-8 mb-4 items-center'>
                                <p className='col-span-1 text-base font-semibold'>Technology :</p>
                                <div className='col-span-7 text-gray-600 flex gap-3'>
                                    {
                                        specificProjectData.technology.map((tech, index) => (
                                            <p key={index} className='bg-sky-100 py-[1px] px-4 rounded-full border border-sky-300'>{tech}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='grid grid-cols-8 mb-4 items-center'>
                                <p className='col-span-1 text-base font-semibold'>Duration:</p>
                                <p className='col-span-7 text-gray-600'>{specificProjectData.project_duration}</p>
                            </div>
                            <div className='grid grid-cols-8 mb-4'>
                                <p className='col-span-1 text-base font-semibold'>Contributor:</p>
                                <div className='col-span-7 grid grid-cols-3'>
                                    {
                                        specificProjectData.contributors.map((contributor, index) => (
                                            <div key={index}>
                                                <p className='text-xs text-gray-400'>{contributor.role}</p>
                                                <p className='text-xl'>{contributor.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='grid grid-cols-8 mb-4'>
                                <p className='col-span-1 text-base font-semibold'>Features:</p>
                                <div className='col-span-7'>
                                    {
                                        specificProjectData.project_features.map((feature, index) => (
                                            <div key={index} className='flex gap-5'>
                                                <p className='text-lg'>{index + 1}.</p>
                                                <div>
                                                    <p className='text-lg text-gray-800'>{feature.feature_name}</p>
                                                    <p className='text-sm text-gray-700'>{feature.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {
                                specificProjectData?.tasks && (
                                    <div className='grid grid-cols-8 mb-4'>
                                        <p className='col-span-1 text-base font-semibold'>Created Task:</p>
                                        <div className='col-span-7'>
                                            {
                                                specificProjectData.tasks.map((task, index) => (
                                                    <div key={index} className='border border-1 border-gray-300 rounded-md bg-white mb-6 px-7 py-5 '>
                                                        <div className='grid grid-cols-3'>
                                                            <div>
                                                                <p className='text-xs text-gray-400'>Task Name</p>
                                                                <p className='text-lg'>{task.taskName}</p>
                                                            </div>
                                                            <div>
                                                                <p className='text-xs text-gray-400'>Deadline</p>
                                                                <p className='text-lg'>{task.deadline}</p>
                                                            </div>
                                                            <div>
                                                                <p className='text-xs text-gray-400'>Status</p>
                                                                <p className='text-lg'>{task.status}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='text-xs text-gray-400 mt-3'>Description</p>
                                                            <p className='text-lg'>{task.taskDescription}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            }

                        </>
                    )
                }
            </div >
            <Modal title="Add new task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className='text-gray-500 text-xs mb-1 mt-6'>Task Name</p>
                <Input placeholder="Enter the task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <p className='text-gray-500 text-xs mb-1 mt-4'>Task Description</p>
                <TextArea rows={4} placeholder="Enter task description here" maxLength={200} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                <p className='text-gray-500 text-xs mb-1 mt-4'>Deadlines</p>
                <DatePicker
                    style={{ width: '100%' }}
                    onChange={onChange}
                    value={deadline}
                />
            </Modal>
        </>
    );
};

export default ProjectDetails;
