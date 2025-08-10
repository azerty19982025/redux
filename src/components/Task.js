import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.description);

  const handleEdit = () => {
    if (editing && newText.trim()) {
      dispatch(editTask(task.id, newText));
    }
    setEditing(!editing);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {editing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit}>{editing ? 'Sauver' : 'Modifier'}</button>
    </div>
  );
}
