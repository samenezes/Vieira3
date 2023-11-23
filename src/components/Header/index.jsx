import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
export function Header({ handleAddTask }) {

  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
  console.log("teste do handle" +event)
    handleAddTask(title);
    setTitle('');


  }

  function onChangeTitle(event) {
      
    console.log(event)
    
    setTitle(event.target.value);
    

  }
  return (
    <header className={styles.header}>

       <h1 className={styles.nossaDupla}>Notas de Recado</h1> 
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova Nota" type="text" onChange={onChangeTitle} value={title} className={styles.input} />
        <button>NOTA <AiOutlinePlusCircle size={20} /></button>
      </form>


    </header>

  );

}
