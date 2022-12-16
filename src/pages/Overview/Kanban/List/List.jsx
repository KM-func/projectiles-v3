import AddItem from "./AddItem";
import Item from "./Item";

export default function List(props){
    return(
        <div className="list">
            <div className="header">
                <h3>Backlog</h3>
                <button type="button">+</button>
            </div>
            <div className="body">
                <Item />
                <div className="list-item">
                    <h3>Delete this</h3>
                    <p>Assigned to: AK Mana</p>
                    <p className="grayed">Deadline: August 22, 2022</p>
                </div>
                <AddItem />
            </div>
        </div>
    )
}