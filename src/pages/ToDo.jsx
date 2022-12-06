import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ToDoItem from '../components/ToDoItem';
import { BASE_URL } from '../constants';

function ToDo() {
  const navigate = useNavigate();

  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  const handleNewToDoInput = ({ target }) => setNewToDo(target.value);

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  const fetchToDos = async () => {
    const { data } = await axios.get(`${BASE_URL}/todos`, { headers });
    setToDos(data);
  };

  const addToDo = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/todos`, { todo: newToDo }, { headers });
    setNewToDo('');
    fetchToDos();
  };

  const deleteToDo = async (id) => {
    await axios.delete(`${BASE_URL}/todos/${id}`, { headers });
    fetchToDos();
  };

  const updateToDo = async (id, body) => {
    await axios.put(`${BASE_URL}/todos/${id}`, body, { headers });
    fetchToDos();
  };

  useEffect(() => {
    localStorage.getItem('token') || navigate('/');
    fetchToDos();
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
            value={newToDo}
            onChange={handleNewToDoInput}
          />
          <button className="ToDo__Form-button" onClick={addToDo}>
            +
          </button>
        </form>
        <ul className="ToDo__list">
          {toDos.map((toDo) => {
            return (
              <ToDoItem
                key={toDo.id}
                toDo={toDo}
                deleteToDo={deleteToDo}
                updateToDo={updateToDo}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default ToDo;
