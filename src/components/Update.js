import { useState } from "react";
import { UpdateToDo } from "./actions/Action";
import { connect } from "react-redux";

import style from './css/ShowToDos.css'
const UpdateComponent = (props) => {
    const [title, setTitle] = useState(props.data.title);
    const [description, setDescription] = useState(props.data.description);
    const [submit, setSubmit] = useState(0);

    function update() {
        const id = props.data.id
        props.UpdateToDo({ title, description, id })
        setSubmit(1);
        props.change();
    }
    return (
        <>
            {
                submit==0 ? <>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
                    <input type='textarea' value={description} onChange={e => { setDescription(e.target.value) }} />
                    <button onClick={update}>Submit</button>
                </> : null
            }

        </>
    )
}
const mapStateToProps = (state) => {
    return { toDos: state.Reducers }
}
const mapDispatchToProps = (dispatch) => ({
    UpdateToDo: (object) => (dispatch(UpdateToDo(object)))
})
export default connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);