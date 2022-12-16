import Member from "./Member";
import AddMember from "./AddMember";

export default function TeamMembers(props){
    return(
        <div className="team-members">
            <div className="header">
                <p>Team Members</p>
                <button type="button">+</button>
            </div>
            <div className="body">
                <AddMember />
                <Member name="me" role="Admin" />
                <Member name="Alvin Pormalejo" role="Editor"/>
            </div>
        </div>
    )
}