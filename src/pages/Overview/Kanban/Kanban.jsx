import useProjects from "../../../ProjectsContext";
import List from "./List/List";

export default function Kanban(props){
    const {currentProject} = useProjects();
    return(
        <div className="kanban">
            <div className="header">
                Kanban Board 
                <button type="button">+</button>
            </div>
            <div className="board">
                {
                    currentProject.kanban.map((board, index)=>{
                        return(<List key={index} name={board.name} {...board}/>)
                    })
                }
            </div>
        </div>
    )
}