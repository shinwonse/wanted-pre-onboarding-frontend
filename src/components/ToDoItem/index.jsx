import React, { useState } from 'react';

import { Back, Complete, Delete, Edit } from '../../assets/svg';

function ToDoItem({ toDo, deleteToDo, updateToDo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(toDo.isCompleted);
  const [updatedToDo, setUpdatedToDo] = useState(toDo.todo);

  const startEdit = () => setIsEditing(true);
  const stopEdit = () => setIsEditing(false);

  const handleUpdatedToDoInput = ({ target }) => setUpdatedToDo(target.value);

  const checkToDo = () => {
    setIsCompleted(!isCompleted);
    updateToDo(toDo.id, {
      todo: updatedToDo,
      isCompleted: !isCompleted,
    });
  };

  const submitUpdated = () => {
    updateToDo(toDo.id, {
      todo: updatedToDo,
      isCompleted,
    });
    stopEdit();
  };

  return (
    <>
      {isEditing ? (
        <div className="ToDo__list-item--updating">
          <input
            className="ToDo__list-item--updating-input"
            type="text"
            value={updatedToDo}
            onChange={handleUpdatedToDoInput}
          />
          <div className="ToDo__list-item--updating-button">
            <button onClick={submitUpdated}>
              <Complete width={20} height={20} />
            </button>
            <button onClick={stopEdit}>
              <Back width={20} height={20} />
            </button>
          </div>
        </div>
      ) : (
        <li className="ToDo__list-item">
          <div className="ToDo__list-item-wrapper">
            <input
              className="ToDo__List-item-checkbox"
              type="checkbox"
              checked={isCompleted}
              onChange={checkToDo}
            />
            <h3>{toDo.todo}</h3>
          </div>
          <div className="ToDo__list-button-wrapper">
            <button onClick={startEdit}>
              <Edit width={20} />
            </button>
            <button onClick={() => deleteToDo(toDo.id)}>
              <Delete width={20} />
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default ToDoItem;
