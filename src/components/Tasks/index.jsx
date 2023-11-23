import { Task } from '../Task';
import styles from './tasks.module.css';
export function Tasks({ tasks, onDelete, onComplete }) {

  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        

        <div>
          <p>Notas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Notas concluídas</p>
          <span>{completedTasks} a {tasksQuantity}</span>
         
 
        </div>
 
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
       <p className={styles.sandra}><b>ATÉ A PROXÍMA SANDRINHA</b></p>
      </div>
    </section>
  );
}

