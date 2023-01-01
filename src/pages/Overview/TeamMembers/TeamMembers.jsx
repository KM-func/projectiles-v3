import Member from "./Member";
import AddMember from "./AddMember";
import useProjects from "../../../ProjectsContext";

export default function TeamMembers(props){
    const {currentProject} = useProjects();
    return(
        <div className="team-members">
            <div className="header">
                <p>Team Members</p>
                <button type="button">+</button>
            </div>
            <div className="body">
                <AddMember />
                {
                    currentProject.teamMembers.length > 0 ?
                    currentProject.teamMembers.map((member, index)=>{
                        return(<Member key={index} name={member.name} role={member.role}/>)
                    }) : <p>No current team members</p>
                }
            </div>
        </div>
    )
}