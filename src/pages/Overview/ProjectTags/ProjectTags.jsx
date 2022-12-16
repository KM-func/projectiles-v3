import Tag from "./Tag";
import AddTag from "./AddTag";

export default function ProjectTags(props){
    return(
        <div className="tags">
            <div className="header">
                <p>Tags</p>
                <button type="button">+</button>
            </div>
            <div className="body">
                <AddTag />
                <Tag tag="Coding"/>
                <Tag tag="Memes"/>
            </div>
        </div>
    )
}