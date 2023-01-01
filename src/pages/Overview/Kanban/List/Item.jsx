export default function Item(props){
    return(
        <div className="list-item">
            <h3>{props.name}</h3>
            <p>Assigned to: {props.assignedTo}</p>
            <p className="grayed">Deadline: {props.deadline}</p>
        </div>
    )
}