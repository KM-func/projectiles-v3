import useProjects from "../../../ProjectsContext";

export default function Type(props){
    const {currentProject} = useProjects();

    return(
        currentProject.projectType === props.name ?
            <option value={props.name} selected>{props.name}</option> : 
            <option value={props.name}>{props.name}</option>
    )
}