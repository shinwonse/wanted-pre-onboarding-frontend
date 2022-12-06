import React, { useState } from 'react';

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
          <div>
            <button onClick={submitUpdated}>제출</button>
            <button onClick={stopEdit}>취소</button>
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
          <div>
            <button onClick={startEdit}>@</button>
            <button onClick={() => deleteToDo(toDo.id)}>X</button>
          </div>
        </li>
      )}
    </>
  );
}

export default ToDoItem;
