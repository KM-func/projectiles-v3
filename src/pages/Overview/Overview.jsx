export default function Overview(props){
    
    return(
        <div className="overview">
            <div className="project-list">
                <div className="header">
                    ProjectList
                    <button type="button">
                        Add new project
                    </button>
                </div>
                <div className="body">
                    <button type="button">Project 1</button>
                    <button type="button">Project 1</button>
                    <button type="button">Project 1</button>
                </div>
            </div>
            <div className="overview-body">
                <div className="header">
                </div>
                <div className="body">
                    <div className="description">
                        
                    </div>
                    <div className="history">
                        
                    </div>
                    <div className="kanban">
                        
                    </div>
                    <div className="details">

                    </div>
                </div>
            </div>
        </div>
    )
}