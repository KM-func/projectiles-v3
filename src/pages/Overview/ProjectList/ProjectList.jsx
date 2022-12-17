import Project from "./Project";
import AddIcon from "../../../assets/images/add-icon.svg";
import AddProject from "./AddProject";
import { useState } from "react";

export default function ProjectList(props){
    const [showModal, setShowModal] = useState(false);
    
    const showAddProjectModal = (e) =>{
        showModal ? setShowModal(false) : setShowModal(true);
        console.log(showModal);
    }
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
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}