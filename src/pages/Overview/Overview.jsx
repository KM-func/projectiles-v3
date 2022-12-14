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
                    <div>
                        <h2>Title</h2>
                        <h2>Target Completion</h2>
                    </div>
                    <div>
                        <h2>Created at:</h2>
                        <h2>Project Status</h2>
                    </div>
                    <div>
                        <button type="button">X</button>
                        <button type="button">edit</button>
                    </div>
                </div>
                <div className="body">
                    <div className="description">
                        <div className="header">

                        </div>
                        <div className="body">

                        </div>
                    </div>
                    <div className="history">
                        <div className="header">
                            
                        </div>
                        <div className="body">

                        </div>
                    </div>
                    <div className="kanban">
                        <div className="header">
                            Kanban Board 
                            <button type="button">+</button>
                        </div>
                        <div className="board">
                            <div className="list">
                                <div className="list-item">
                                    <h3>Delete this</h3>
                                    <p>Assigned to: AK Mana</p>
                                    <p className="grayed">Deadline: August 22, 2022</p>
                                </div>
                                <div className="list-item">
                                    <h3>Delete this</h3>
                                    <p>Assigned to: AK Mana</p>
                                    <p className="grayed">Deadline: August 22, 2022</p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="list-item">
                                    <h3>Delete this</h3>
                                    <p>Assigned to: AK Mana</p>
                                    <p className="grayed">Deadline: August 22, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="header">
                            
                        </div>
                        <div className="body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}