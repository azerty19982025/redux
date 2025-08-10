import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import Task from './Task';

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('ALL'))}>Toutes</button>
        <button onClick={() => dispatch(setFilter('DONE'))}>Effectuées</button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))}>Non effectuées</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
