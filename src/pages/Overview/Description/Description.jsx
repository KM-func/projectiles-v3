import useProjects from "../../../ProjectsContext";
import EditDescription from "./EditDescription";
import {useState} from "react"

export default function Description(props){

    const {currentProject} = useProjects();
    const [showModal, setShowModal] = useState(false);
    const showAddProjectModal = (e) =>{
        showModal ? setShowModal(false) : setShowModal(true);
        console.log(showModal);
    };

    return(
        <div className="description">
            <EditDescription show={showModal} close={showAddProjectModal} />
            <div className="header">
                description
                <button onClick={showAddProjectModal} type="button">edit</button>
            </div>
            <div className="body">
                {currentProject.description}
            </div>
        </div>
    )
}