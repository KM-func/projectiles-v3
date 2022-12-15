import AddIcon from "../../assets/images/add-icon.svg"

export default function Overview(props){
    
    return(
        <div className="overview">
            <div className="project-list">
                <div className="header">
                    <h2>ProjectList</h2>
                    <button type="button">
                        <img src={AddIcon} alt="add icon"/>
                        Add new project
                    </button>
                </div>
                <div className="body">
                    <a href="/overview">Project 1</a>
                    <a href="/overview">Project 1</a>
                    <a href="/overview">Project 1</a>
                </div>
            </div>

            <div className="overview-content">
                <div className="header">
                    <div className="title">
                        <h2>Title</h2>
                        <h3>Target Completion</h3>
                    </div>
                    <div>
                        <h3>Created at:</h3>
                        <h2>Project Status</h2>
                    </div>
                    <div>
                        <button type="button">X</button>
                        <button type="button">edit</button>
                    </div>
                </div>
                <div className="content">
                    <div className="description">
                        <div className="header">
                            description
                            <button type="button">edit</button>
                        </div>
                        <div className="body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla error omnis deserunt dolores accusamus, quis minus, debitis atque, provident natus nemo repudiandae enim veniam incidunt quisquam fuga magnam dolorem excepturi.
                        </div>
                    </div>
                    <div className="history">
                        <div className="header">
                            history
                        </div>
                        <div className="body">
                            <p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}