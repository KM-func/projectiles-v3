import Project from "./Project";
import AddIcon from "../../../assets/images/add-icon.svg";
import AddProject from "./AddProject";
import { useState } from "react";
import useProjects from "../../../ProjectsContext";

export default function ProjectList(props){
    const [showModal, setShowModal] = useState(false);
    const { projects, selectProject } = useProjects();
    
    const showAddProjectModal = (e) =>{
        showModal ? setShowModal(false) : setShowModal(true);
        console.log(showModal);
    };

    return(
        <div className="project-list">
            <AddProject show={showModal} close={showAddProjectModal}/>
            <div className="header">
                <h2>ProjectList</h2>
                <button type="button" onClick={showAddProjectModal}>
                    <img src={AddIcon} alt="add icon"/>
                    Add new project
                </button>
            </div>
            <div className="body">
                {
                    projects.map((project, index) =>{
                        return(<Project key={index} selectProject={selectProject} {...project} />)
                    }).reverse()
                }
            </div>
        </div>
    )
}