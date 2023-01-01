import useProjects from "../../../ProjectsContext";

export default function Status(props){

    const { currentProject } = useProjects();

    return(
        props.status === currentProject.projectStatus ?
            <option value={props.status} selected>{props.status}</option> :
            <option value={props.status}>{props.status}</option> 
    )
}