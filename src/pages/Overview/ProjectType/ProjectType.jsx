import { useState } from "react";
import Type from "./Type";

export default function ProjectType(props){

    const [types, setTypes] = useState([
        "Personal", "Work", "Leisure"
    ]);
    return(
        <form className="project-type">
            <label>Project Type</label>
            <select name="project-type">
                {
                    types.map((type, index)=>{
                        return(<Type key={index} name={type}/>);
                    })
                }
            </select>
        </form>
    )
}