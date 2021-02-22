import { useState } from 'react';
import api from '../../service/api';
import './styles.css';

function TaskForm(){
  const [title, setTitle] = useState("")
  const [description, setdescription] = useState("")

  const handleSubmit = async (event)=> {
    event.preventDefaut()

    try {
      await api.post("/", {
        title,
        description
      })
      
    } catch (error) {
      console.log('Ocorreu um erro ao adicionar o Registro' + error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        className="task-input" 
        placeholder="Add Titulo"
        required
        value={title}
      />
      <input 
        type="text" 
        className="task-input" 
        placeholder="Add Descrição"
        required
        value={description}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">Adicionar</button>
        <button className="btn clear-btn">Limpar</button>
      </div>
    </form>
  );
}

export default TaskForm;