import Status from "./Status";

export default function ProjectStatus(props){
    return(
        <form>
            <select name="projectStatus">
                <Status status="active"/>
                <Status status="active"/>
                <Status status="active"/>
            </select>
        </form>
        
    )
}