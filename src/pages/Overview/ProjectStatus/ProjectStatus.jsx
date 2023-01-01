import Status from "./Status";
import {useState} from 'react'
export default function ProjectStatus(props){
    const [options, setOptions] = useState([
        "Not Started",
        "Planning",
        "Ongoing",
        "Postponed",
        "Cancelled",
    ]);

    return(
        <form>
            <select name="projectStatus">
                {
                    options.map((option, index) =>{
                        return(<Status key={index} status={option} />)
                    })
                }
            </select>
        </form>
        
    )
}