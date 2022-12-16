export default function AddMember(props){
    return(
        <form id="add-member">
            <input type="text" name="add-tag" placeholder="Add tag"/>
            <select id="role">
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
            </select>
            <button type="submit">+</button>
        </form>
    )
}