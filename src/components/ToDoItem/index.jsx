import axios from 'axios';
import React from 'react';

import { BASE_URL } from '../../constants';

function ToDoItem(toDo) {
  const setUpdateUI = (e) => {
    e.preventDefault();
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  const updateToDo = (e) => {
    e.preventDefault();
  };

  const deleteToDo = async (e) => {
    e.preventDefault();
    await axios.delete(`${BASE_URL}/todos/${toDo.toDo.id}`, { headers });
  };

  return (
    <>
      <li className="ToDo__list-item">
        테스트중
        <div>
          <button onClick={setUpdateUI}>@</button>
          <button onClick={deleteToDo}>X</button>
        </div>
      </li>
    </>
  );
}

export default ToDoItem;
