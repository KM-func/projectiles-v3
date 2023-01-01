import ProjectList from "./ProjectList/ProjectList";
import ProjectStatus from "./ProjectStatus/ProjectStatus";
import Description from "./Description/Description";
import History from "./History/History";
import Kanban from "./Kanban/Kanban";
import ProjectType from "./ProjectType/ProjectType";
import ProjectTags from "./ProjectTags/ProjectTags";
import TeamMembers from "./TeamMembers/TeamMembers";
import { useState } from "react";
import EditProjectHeader from "./EditProjectHeader";

import useProjects from "../../ProjectsContext";

export default function Overview(props){
    const [showModal, setShowModal] = useState(false);
    const { currentProject } = useProjects();

    const showAddProjectModal = (e) =>{
        showModal ? setShowModal(false) : setShowModal(true);
        console.log(showModal);
    }
    return(
        <div className="overview">
            <ProjectList/>
            <div className="overview-content">
                <EditProjectHeader show={showModal} close={showAddProjectModal} />
                <div className="header">
                    <div className="title">
                        <h2> {currentProject.projectTitle} </h2>
                        <h3>Target Completion: {currentProject.targetCompletion}</h3>
                    </div>
                    <div>
                        <h3>Created at: {currentProject.createdAt}</h3>
                        <ProjectStatus />
                    </div>
                    <div>
                        <button type="button">X</button>
                        <button type="button" onClick={showAddProjectModal}>edit</button>
                    </div>
                </div>
                <div className="content">
                    <Description />
                    <History />
                    <Kanban />
                    <div className="details">
                        <h2>Project Details</h2>
                        <ProjectType />
                        <ProjectTags />
                        <TeamMembers />
                    </div>
                </div>
            </div>
        </div>
    )
}