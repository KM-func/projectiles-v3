import ProjectList from "./ProjectList/ProjectList";
import ProjectStatus from "./ProjectStatus/ProjectStatus";
import Description from "./Description";
import History from "./History/History";
import Kanban from "./Kanban/Kanban";
import ProjectType from "./ProjectType/ProjectType";
import ProjectTags from "./ProjectTags/ProjectTags";
import TeamMembers from "./TeamMembers/TeamMembers";

export default function Overview(props){    
    return(
        <div className="overview">
            <ProjectList/>
            <div className="overview-content">
                <div className="header">
                    <div className="title">
                        <h2>Title</h2>
                        <h3>Target Completion</h3>
                    </div>
                    <div>
                        <h3>Created at:</h3>
                        <ProjectStatus />
                    </div>
                    <div>
                        <button type="button">X</button>
                        <button type="button">edit</button>
                    </div>
                </div>
                <div className="content">
                    <Description />
                    <History />
                    <Kanban />
                    <div className="details">
                        <h2>Project Details</h2>
                        <ProjectType />
                        <ProjectTags />
                        <TeamMembers />
                    </div>
                </div>
            </div>
        </div>
    )
}