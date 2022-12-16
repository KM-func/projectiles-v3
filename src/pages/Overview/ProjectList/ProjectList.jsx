import Project from "./Project";
import AddIcon from "../../../assets/images/add-icon.svg";

export default function ProjectList(props){
    
    return(
        <div className="project-list">
            <div className="header">
                <h2>ProjectList</h2>
                <button type="button">
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