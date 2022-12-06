import React, { useState } from 'react';

function ToDoItem({ toDo, deleteToDo, updateToDo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedToDo, setUpdatedToDo] = useState(toDo.todo);

  const startEdit = () => setIsEditing(true);
  const stopEdit = () => setIsEditing(false);

  const handleUpdatedToDoInput = ({ target }) => setUpdatedToDo(target.value);

  const submitUpdated = () => {
    updateToDo(toDo.id, {
      todo: updatedToDo,
      isCompleted: toDo.isCompleted,
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
          {toDo.todo}
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
