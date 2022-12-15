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
                            <p></p>
                        </div>
                    </div>
                    <div className="kanban">
                        <div className="header">
                            Kanban Board 
                            <button type="button">+</button>
                        </div>
                        <div className="board">
                            <div className="list">
                                <div className="header">
                                    <h3>Backlog</h3>
                                    <button type="button">+</button>
                                </div>
                                <div className="body">
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
                                    <form className="add-item">
                                        <input type="text" id="add-task"/>
                                        <button type="button">+</button>
                                    </form>
                                </div>
                            </div>
                            <div className="list">
                            <div className="header">
                                    <h3>Backlog</h3>
                                    <button type="button">+</button>
                                </div>
                                <div className="body">
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
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <h2>Project Details</h2>
                        <form className="project-type">
                            <label>Project Type</label>
                            <select>
                                <option value="Personal">Personal</option>
                                <option value="Work">Work</option>
                                <option value="Leisure">Leisure</option>
                            </select>
                        </form>
                        <div className="tags">
                            <div className="header">
                                <p>Tags</p>
                                <button type="button">+</button>
                            </div>
                            <div className="body">
                                <p>Coding</p>
                                <p>Art</p>
                            </div>
                        </div>
                        <div className="team-members">
                            <div className="header">
                                <p>Tags</p>
                                <button type="button">+</button>
                            </div>
                            <div className="body">
                                <p>Me <span>(admin)</span></p>
                                <p>Alvin Pormalejo <span>(editor)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}