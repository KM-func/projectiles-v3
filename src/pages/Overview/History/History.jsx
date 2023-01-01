import Entry from "./Entry";
import useProjects from "../../../ProjectsContext";

export default function History(props){
    const { currentProject } = useProjects();
    
    return(
        <div className="history">
            <div className="header">
                history
            </div>
            <div className="body">
                { currentProject.history.map((entry, index) =>{
                    return(
                        <Entry key={index} date={entry.date} entry={entry.entry} />
                    )
                })}
            </div>
        </div>
    )
}