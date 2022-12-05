import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ToDo() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('token') || navigate('/');
  }, []);
  return (
    <main className="ToDoMain">
      <h1 className="ToDo__title">TODO LIST</h1>
      <div className="ToDo__wrapper">
        <form className="ToDo__Form">
          <input
            className="ToDo__Form-input"
            type="text"
            placeholder="Type your todo"
          />
          <button className="ToDo__Form-button">+</button>
        </form>
        <ul className="ToDo__list">
          <li className="ToDo__list-item">Todo 1</li>
          <li className="ToDo__list-item">Todo 2</li>
        </ul>
      </div>
    </main>
  );
}

export default ToDo;
