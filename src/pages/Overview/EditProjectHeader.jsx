import useProjects from "../../ProjectsContext";

export default function EditProjectHeader(props){ 

    const {currentProject, editProjectTitle} = useProjects();

    const changedTitle = (e) =>{
        e.preventDefault();
        const selectedProj = currentProject.projectID;
        if(currentProject.projectTitle !== document.getElementById("project-title").value){
            editProjectTitle(selectedProj, document.getElementById(selectedProj).innerText);
        }
    }
    
    if(props.show){
        return(
            <div className="modal-bg">
                
                <div className="modal">
                    <button type="button" onClick={props.close}>x</button>
                    <h1>Add Project</h1>
                    <form>
                        <label>Project Title</label>
                        <input type="text" name="project-title" id="project-title" placeholder={currentProject.projectTitle}/>
                        <label>Target Completion</label>
                        <input type="date" name="project-date"/>
                        <label>Project Status</label>
                        <select>
                            <option value="active">Active</option>
                            <option value="notStarted">Not started</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button type="submit" onClick={changedTitle}>Submit</button>
                    </form>
                </div>
            </div>
        )  
    }
}