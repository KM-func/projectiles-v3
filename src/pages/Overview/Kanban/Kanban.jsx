import List from "./List/List";

export default function Kanban(props){
    return(
        <div className="kanban">
            <div className="header">
                Kanban Board 
                <button type="button">+</button>
            </div>
            <div className="board">
                <List />
                <List />
            </div>
        </div>
    )
}