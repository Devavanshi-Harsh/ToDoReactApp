import React, { useState } from 'react';
import { connect } from 'react-redux';
import UpdateComponent from './Update';
import { DeleteToDo } from './actions/Action';

const ShowToDos = ({ toDos, DeleteToDo }) => {
    const [update, setUpdate] = useState(false);
    function change(){
        setUpdate(update?false:true)
    }
    return (
        <div>
            <div className="lists">
                <div className="listitems">
                    {toDos.map((e, i) => (
                        <span key={i} className='items'>
                            <p className='id'>{i}</p>
                            <h4 className='title'>{e.title}</h4>
                            <p className='description'>{e.description}</p>
                            <button onClick={() => DeleteToDo(e.id)} className='delete'>Delete</button>
                            {
                                update ? null:<button onClick={change} className='update'>Update</button>
                            }
                            {
                                update ? <UpdateComponent data={e} change={change} /> : null
                            }

                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { toDos: state.Reducers }
}
const mapDispatchToProps = (dispatch) => ({
    DeleteToDo: (id) => (dispatch(DeleteToDo(id))),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowToDos);