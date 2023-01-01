import Tag from "./Tag";
import AddTag from "./AddTag";
import useProjects from "../../../ProjectsContext";


export default function ProjectTags(props){
    const {currentProject} = useProjects();
    return(
        <div className="tags">
            <div className="header">
                <p>Tags</p>
                <button type="button">+</button>
            </div>
            <div className="body">
                <AddTag />
                {
                    currentProject.tags.map((tag, index) =>{
                        return(<Tag key={index} tag={tag.name} color={tag.color}/>)
                    })
                }
            </div>
        </div>
    )
}