import { useState } from "react";
import style from './css/ToDos.css'
import { AddToDo } from "./actions/Action";
import { connect } from "react-redux";
import { v4 } from "uuid";

function ToDos({ AddToDo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const object = { title, description, id: v4() }
        AddToDo(object);
    }
    return (
        <div className="input-box">
            <form onSubmit={(e) => { handleSubmit(e) }} className="form">
                <div className="inputContainers"><label htmlFor="title" className="label">Title</label> <input id="title" type="text" value={title}
                    onChange={(e) => { setTitle(e.target.value) }} className="input" /></div>
                <div className="inputContainers"><label className="label" htmlFor="description">Description </label><input type="textarea" value={description}
                    onChange={(e) => { setDescription(e.target.value) }} className="input" id="description" /></div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )


}
const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    AddToDo: (data) => (dispatch(AddToDo(data)))
})
export default connect(mapStateToProps, mapDispatchToProps)(ToDos);