export const initialState = {
    projects: [
        {
            projectID: "As2vz2d2123s",
            projectTitle: "Meme Project",
            targetCompletion: "September 31, 2022",
            projectStatus: "not active",
            createdAt: "August 12, 2022",
            description: "This is a meme project fams",
            projectType: "Work",
            tags: [
                {color:"lilac", name: "coding"},
                {color:"bright-red", name: "practice"},
                {color:"deep-blue", name: "web development"},
                {color:"subtle-green", name: "meme2"}
            ],
            teamMembers: [
                {   
                    name: "KM Funcion",
                    role: "admin"
                },
                {
                    name: "Millicent Anger",
                    role: "editor"
                },
                {
                    name: "Morgana Fox",
                    role: "editor"
                }
            ],
            history: [],
            kanban: [
                {
                    name: "Backlog",
                    tasks: [
                        {
                            taskID: "asd231g3",
                            name: "PenPen 01",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Backlog",
                            description: "This is a task"
                        },
                        {
                            taskID: "as64313",
                            name: "Task 02",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Backlog",
                            description: "This is a task"
                        },
                        {
                            taskID: "as13zx213",
                            name: "Task 03",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Backlog",
                            description: "This is a task"
                        }
                    ]
                },
                {
                    name: "Doing",
                    tasks: [
                        {
                            taskID: "asd2qw313",
                            name: "Task 01",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Doing",
                            description: "This is a task"
                        },
                        {
                            taskID: "as643gf13",
                            name: "Task 02",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Doing",
                            description: "This is a task"
                        },
                        {
                            taskID: "as132ds13",
                            name: "Task 03",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Doing",
                            description: "This is a task"
                        }
                    ]
                },
                {
                    name: "Done",
                    tasks: [
                        {
                            taskID: "asd2qwe313",
                            name: "Orca-stra 01",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Done",
                            description: "This is a task"
                        },
                        {
                            taskID: "as64ew313",
                            name: "Task 02",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Done",
                            description: "This is a task"
                        },
                        {
                            taskID: "as1nhh3213",
                            name: "Task 03",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Done",
                            description: "This is a task"
                        }
                    ]
                }
            ]
        }, 
        {
            projectID: "Asd2123s",
            projectTitle: "HELLO!",
            targetCompletion: "June 12, 2022",
            projectStatus: "cancelled",
            createdAt: "June 2, 2022",
            description: "This is not project fams",
            projectType: "Leisure",
            tags: [
                {color:"subtle-green", name: "meme2"},
                {color:"bright-red", name: "practice"},
                {color:"lilac", name: "coding"},
                {color:"deep-blue", name: "web development"},
            ],
            teamMembers: [
                {
                    name: "KM Funcion",
                    role: "admin"
                },
                {
                    name: "Millicent Anger",
                    role: "editor"
                },
                {
                    name: "Morgana Fox",
                    role: "editor"
                }
            ],
            history: [],
            kanban: [
                {
                    name: "Backlog",
                    tasks: [
                        {
                            taskID: "as23d2313",
                            name: "Task 01",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Backlog",
                            description: "This is a task"
                        },
                        {
                            taskID: "as6431763",
                            name: "Task 02",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Backlog",
                            description: "This is a task"
                        },
                        {
                            taskID: "as136213",
                            name: "Task 03",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Backlog",
                            description: "This is a task"
                        }
                    ]
                },
                {
                    name: "Doing",
                    tasks: [
                        {
                            taskID: "asd532313",
                            name: "Task 01",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Doing",
                            description: "This is a task"
                        },
                        {
                            taskID: "as6433313",
                            name: "Task 02",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Doing",
                            description: "This is a task"
                        },
                        {
                            taskID: "as1387213",
                            name: "Task 03",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Doing",
                            description: "This is a task"
                        }
                    ]
                },
                {
                    name: "Done",
                    tasks: [
                        {
                            taskID: "asd2344413",
                            name: "Task 01",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Done",
                            description: "This is a task"
                        },
                        {
                            taskID: "as643554313",
                            name: "Task 02",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Done",
                            description: "This is a task"
                        },
                        {
                            taskID: "as14353213",
                            name: "Task 03",
                            assignedTo: "KM Funcion",
                            deadline: "June 5, 2022",
                            status: "Done",
                            description: "This is a task"
                        }
                    ]
                }
            ]
        }
    ],
    currentProject : {
        projectID: "asdasdasd",
        projectTitle: "TEST PROJECT",
        targetCompletion: "May 1, 2022",
        projectStatus: "Ongoing",
        createdAt: "January 14, 2022",
        description: "Zǎo shang hǎo zhōng guó! Xiàn zài wǒ yǒu bing chilling Wǒ hěn xǐ huān bing chilling Dàn shì sù dù yǔ jī qíng jiǔ ' bǐ bing chilling 'sù dù yǔ jī qíng, sù dù yǔ jī qíng jiǔ' Wǒ zuì xǐ huān Suǒ yǐ xiàn zài shì yīn yuè shí jiān Zhǔn bèi Yī, èr, sān",
        projectType: "Leisure",
        tags: [
            {color:"subtle-green", name: "meme2"},
            {color:"bright-red", name: "practice"},
            {color:"lilac", name: "coding"},
            {color:"deep-blue", name: "web development"},
        ],
        teamMembers: [
            {
                name: "KM Funcion",
                role: "admin"
            },
            {
                name: "Millicent Anger",
                role: "editor"
            },
            {
                name: "Morgana Fox",
                role: "editor"
            }
        ],
        history: [
            {
                date: "February 31, 2023",
                entry: "Walter became sus"
            },
            {
                date: "March 21, 2023",
                entry: "Jesse became sus"
            },
            {
                date: "June 31, 2023",
                entry: "Hank found the sussy baka impostor"
            }
        ],
        kanban: [
            {
                name: "Backlog",
                tasks: [
                    {
                        taskID: "asd231g3",
                        name: "PenPen 01",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Backlog",
                        description: "This is a task"
                    },
                    {
                        taskID: "as64313",
                        name: "Task 02",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Backlog",
                        description: "This is a task"
                    },
                    {
                        taskID: "as13zx213",
                        name: "Task 03",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Backlog",
                        description: "This is a task"
                    }
                ]
            },
            {
                name: "Doing",
                tasks: [
                    {
                        taskID: "asd2qw313",
                        name: "Task 01",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Doing",
                        description: "This is a task"
                    },
                    {
                        taskID: "as643gf13",
                        name: "Task 02",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Doing",
                        description: "This is a task"
                    },
                    {
                        taskID: "as132ds13",
                        name: "Task 03",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Doing",
                        description: "This is a task"
                    }
                ]
            },
            {
                name: "Done",
                tasks: [
                    {
                        taskID: "asd2qwe313",
                        name: "Orca-stra 01",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Done",
                        description: "This is a task"
                    },
                    {
                        taskID: "as64ew313",
                        name: "Task 02",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Done",
                        description: "This is a task"
                    },
                    {
                        taskID: "as1nhh3213",
                        name: "Task 03",
                        assignedTo: "KM Funcion",
                        deadline: "June 5, 2022",
                        status: "Done",
                        description: "This is a task"
                    }
                ]
            }
        ]
    },
    projectTemplate: {
        projectTitle: "",
        targetCompletion: "",
        projectStatus: "Not Started",
        createdAt: "",
        description: "",
        projectType: "",
        tags: [],
        teamMembers: [],
        history: [],
        kanban: [
            {
                name: "Backlog",
                tasks: []
            },
            {
                name: "Doing",
                tasks: []
            },
            {
                name: "Done",
                tasks: []
            }
        ]
    }
}
 
const projectsReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "ADD_NEW_PROJECT":
            console.log("ADD_NEW_PROJECT", payload)
            return{
                ...state,
                projects: payload.projects,
                currentProject: {
                    ...payload.currentProject
                    // add history in the current project payload
                }
            }
        case "DELETE_PROJECT":
            return{
                ...state, 
                projects: state.projects.filter(
                    project => project.projectID !== payload.projectID
                ),
                currentProject:{
                    ...payload.currentProject
                }
            }
         case "DELETE_LAST_PROJ":
         return{
             ...state, 
             projects: state.projects.filter(
                 project => project.projectID !== payload.projectID
             ),
             currentProject:{
                 ...state.projectTemplate
             }
         }   
        case "SELECT_PROJECT":
            return{
                ...state,
                currentProject: payload.currentProject
            }
        case "EDIT_PROJECT_TITLE":
            return{

            }
        case "EDIT_TITLE":
            return{
                ...state,
                projects: state.projects.map(
                    (project, index) => 
                        project.projectID === payload.projectID ?
                            {...state.projects[index],
                                projectTitle: payload.projectTitle,
                                history: [
                                    ...state.projects[index].history,
                                    payload.historyUpdate
                                ]
                            } :
                            project
                ),
                currentProject:{
                    ...state.currentProject,
                    projectTitle: payload.projectTitle,
                    history: [
                        ...state.currentProject.history,
                        payload.historyUpdate
                    ]
                }
            }
        case "EDIT_TARGET_COMPLETION":
            return{
                ...state,
                projects: state.projects.map(
                    (project, index) => 
                        project.projectID === payload.projectID ?
                            {...state.projects[index],
                                targetCompletion: payload.targetCompletion,
                                history: [
                                    ...state.projects[index].history,
                                    payload.historyUpdate
                                ]
                            } :
                            project
                ),
                currentProject:{
                    ...state.currentProject,
                    targetCompletion: payload.targetCompletion,
                    history: [
                        ...state.currentProject.history,
                        payload.historyUpdate
                    ]
                }
            }
        case "EDIT_DESCRIPTION":
            return{
                ...state,
                projects: state.projects.map(
                    (project, index) => 
                        project.projectID === payload.projectID ?
                            {
                                ...state.projects[index],
                                description: payload.description,
                                history: [
                                    ...state.projects[index].history,
                                    payload.historyUpdate
                                ] 
                            } :
                            project
                ),
                currentProject:{
                    ...state.currentProject,
                    description: payload.description,
                    history: [
                        ...state.currentProject.history,
                        payload.historyUpdate
                    ]
                }
            }
        case "EDIT_PROJ_STATUS":
            return{
                ...state, 
                projects: state.projects.map(
                    (project, index) => 
                        project.projectID === payload.projectID ?
                            {...state.projects[index],
                                projectStatus: payload.projectStatus,
                                history: [
                                    ...state.projects[index].history,
                                    payload.historyUpdate
                                ] 
                            } :
                            project
                ),
                currentProject:{
                    ...state.currentProject,
                    projectStatus: payload.projectStatus,
                    history: [
                        ...state.currentProject.history,
                        payload.historyUpdate
                    ]
                }
            }
        case "EDIT_PROJ_TYPE":
            return{
                ...state, 
                projects: state.projects.map(
                    (project, index) => 
                        project.projectID === payload.projectID ?
                            {...state.projects[index],
                                projectType: payload.projectType,
                                history: [
                                    ...state.projects[index].history,
                                    payload.historyUpdate
                                ] 
                            } :
                            project
                ),
                currentProject:{
                    ...state.currentProject,
                    projectType: payload.projectType,
                    history: [
                        ...state.currentProject.history,
                        payload.historyUpdate
                    ]
                }
            }

        case "ADD_TAG":
            return{
                ...state, 
                projects: state.projects.map(
                    (project, index) => 
                        project.projectID === payload.projectID ?
                            {...state.projects[index],
                                tags: [
                                    ...state.projects[index].tags,
                                    payload.tag
                                ],
                                history: [
                                    ...state.projects[index].history,
                                    payload.historyUpdate
                                ]} :
                            project
                ),
                currentProject:{
                    ...state.currentProject,
                    tags: [
                        ...state.currentProject.tags,
                        payload.tag
                    ],
                    history: [
                        ...state.currentProject.history,
                        payload.historyUpdate
                    ]
                }
            }
            case "REMOVE_TAG":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {...state.projects[index],
                                    tags: state.projects[index].tags.filter(
                                        (tag => tag.name !== payload.deletedTag)
                                    ),
                                    history: [
                                        ...state.projects[index].history,
                                        payload.historyUpdate
                                    ]} :
                                project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        tags: state.currentProject.tags.filter(
                            (tag => tag.name !== payload.deletedTag)
                        ),
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ]
                    }
                }
            case "ADD_MEMBER":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {...state.projects[index],
                                    teamMembers: [
                                        ...state.projects[index].teamMembers,
                                        payload.member
                                    ],
                                    history: [
                                        ...state.currentProject.history,
                                        payload.historyUpdate
                                    ]} :
                                project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        teamMembers: [
                            ...state.currentProject.teamMembers,
                            payload.member
                        ],
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ]
                    }
                }
            case "REMOVE_MEMBER":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {...state.projects[index],
                                    teamMembers: state.projects[index].teamMembers.filter(
                                        member => member.name !== payload.deletedMember
                                    ),
                                    history: [
                                        ...state.projects[index].history,
                                        payload.historyUpdate
                                    ]} :
                                project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        teamMembers: state.currentProject.teamMembers.filter(
                            (member => member.name !== payload.deletedMember)
                            
                        ),
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ]
                    }
                }
            case "ADD_COMPONENT_TASK":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {...state.projects[index],
                                    
                                    kanban: state.projects[index].kanban.map(
                                        (component, index2) => 
                                            component.name === payload.task.status ?
                                            { ...state.projects[index].kanban[index2],
                                                tasks: [
                                                    ...state.projects[index].kanban[index2].tasks,
                                                    payload.task
                                                ],
                                                   
                                            } : component
                                    ),
                                    history: [
                                        ...state.projects[index].history,
                                        payload.historyUpdate
                                    ]
                                } : project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        kanban: state.currentProject.kanban.map(
                            (component, index) => 
                                component.name === payload.task.status ?
                                { ...state.currentProject.kanban[index],
                                    tasks: [
                                        ...state.currentProject.kanban[index].tasks,
                                        payload.task
                                    ],  
                                } : component
                        ),
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ]
                    }
                }  
            case "EDIT_COMPONENT_TASK":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {...state.projects[index],
                                    kanban: state.projects[index].kanban.map(
                                        (component, index2) => 
                                            component.name === payload.task.status ?
                                            { ...state.projects[index].kanban[index2],
                                                tasks: state.projects[index].kanban[index2].tasks.map(
                                                    (task, index3) =>
                                                        state.projects[index].kanban[index2].tasks[index3].taskID === payload.task.taskID ?
                                                            {
                                                                ...payload.task
                                                            } : task
                                                )
                                            } : component
                                    ),
                                    history: [
                                        ...state.projects[index].history,
                                        payload.historyUpdate
                                    ]} : project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        kanban: state.currentProject.kanban.map(
                            (component, index) => 
                                component.name === payload.task.status ?
                                { 
                                    ...state.currentProject.kanban[index],
                                    tasks: state.currentProject.kanban[index].tasks.map(
                                        (task, index2) =>
                                            state.currentProject.kanban[index].tasks[index2].taskID === payload.task.taskID ?
                                                {
                                                    ...payload.task
                                                } : task
                                    ) 
                                } : component
                        ),
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ] 
                    }
                }
            case "DELETE_COMPONENT_TASK":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {...state.projects[index],
                                    kanban: state.projects[index].kanban.map(
                                        (component, index2) => 
                                            component ?
                                            { ...state.projects[index].kanban[index2],
                                                tasks: state.projects[index].kanban[index2].tasks.filter(
                                                    task => task.taskID !== payload.taskID
                                                )
                                            } : component
                                    ),
                                    history: [
                                        ...state.projects[index].history,
                                        payload.historyUpdate
                                    ]
                                } : project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        kanban: state.currentProject.kanban.map(
                            (component, index) => 
                                component ?
                                { ...state.currentProject.kanban[index],
                                    tasks: state.currentProject.kanban[index].tasks.filter(
                                        task => task.taskID !== payload.taskID
                                    )
                                } : component
                        ),
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ] 
                    }
                }   
            case "ADD_COMPONENT":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {
                                    ...state.projects[index],
                                    kanban: [
                                        ...state.projects[index].kanban,
                                        payload.component
                                    ],
                                    history: [
                                        ...state.projects[index].history,
                                        payload.historyUpdate
                                    ]} :
                                project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        kanban: [
                            ...state.currentProject.kanban,
                            payload.component
                        ],
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ]
                    }
                }
            case "DELETE_COMPONENT":
                return{
                    ...state, 
                    projects: state.projects.map(
                        (project, index) => 
                            project.projectID === payload.projectID ?
                                {
                                    ...state.projects[index],
                                    kanban: state.projects[index].kanban.filter(
                                        (component => component.name !== payload.deletedComponent)
                                    ),
                                    history: [
                                        ...state.projects[index].history,
                                        payload.historyUpdate
                                    ]} :
                                project
                    ),
                    currentProject:{
                        ...state.currentProject,
                        kanban: state.currentProject.kanban.filter(
                            (component => component.name !== payload.deletedComponent)
                        ),
                        history: [
                            ...state.currentProject.history,
                            payload.historyUpdate
                        ]
                    }
                }
        default:
            throw new Error(`no case for type ${type}`)
    }
};

export default projectsReducer;