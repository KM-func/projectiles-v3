import AddItem from "./AddItem";
import Item from "./Item";

export default function List(props){
    return(
        <div className="list">
            <div className="header">
                <h3>{props.name}</h3>
                <button type="button">+</button>
            </div>
            <div className="body"> 
                {
                    props.tasks.map((task, index)=>{
                        return(<Item key={index} {...task} />)
                    })
                }
                <AddItem />
            </div>
        </div>
    )
}