import Type from "./Type";

export default function ProjectType(props){
    return(
        <form className="project-type">
            <label>Project Type</label>
            <select name="project-type">
                <Type type={"Personal"} />
                <Type type={"Work"} />
                <Type type={"Leisure"} />
            </select>
        </form>
    )
}