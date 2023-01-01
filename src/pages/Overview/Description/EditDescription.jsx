import useProjects from "../../../ProjectsContext"

export default function Description(props){

    const {currentProject} = useProjects();

    if(props.show){
        return( 
            <div className="modal-bg">
                <div className="modal">
                    <button type="button" onClick={props.close}>x</button>
                    <h1>Edit Description</h1>
                    <form>
                        <label>Description</label>
                        <textarea>{currentProject.description}</textarea>

                    <button type="submit" 
                        // add func here
                        >Submit</button>
                    </form> 
                </div>
            </div>
        )
    }
}