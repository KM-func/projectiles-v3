import useProjects from "../../../ProjectsContext";

export default function Project(props){
    return(
        <a href="/" onClick={(e)=>{
            e.preventDefault();
            console.log("poopoo")
            props.selectProject(props.projectID)
            } 
        }>{props.projectTitle}</a> 
    )
}