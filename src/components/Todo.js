import {useState} from 'react'

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false) //returns an array with two elements

    function deleteClicked() {
        setModalIsOpen(true)
    }

    function closeModal () {
        setModalIsOpen(false)
    }
    
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteClicked}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
      { modalIsOpen && <Backdrop click={closeModal}/>}
      
    </div>
  );
}

export default Todo;

//name of function should start with a captital- has to differentiate in build
