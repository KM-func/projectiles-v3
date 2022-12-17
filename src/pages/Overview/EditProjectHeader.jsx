export default function EditProjectHeader(props){ 
    if(props.show){
        return(
            <div className="modal-bg">
                
                <div className="modal">
                    <button type="button" onClick={props.close}>x</button>
                    <h1>Add Project</h1>
                    <form>
                        <label>Project Title</label>
                        <input type="text" name="project-title"/>
                        <label>Target Completion</label>
                        <input type="date" name="project-title"/>
                        <label>Project Status</label>
                        <select>
                            <option value="active">Active</option>
                            <option value="notStarted">Not started</option>
                            <option value="completed">Completed</option>
                        </select>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>            
        )  
    }
}