import './App.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import { PiTrashSimpleLight } from "react-icons/pi";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RiArrowGoBackFill } from "react-icons/ri";

function App() {
  const [todo, setTodo] = useState("");
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo })
    setTodo("");
  }

  function handleDelete(id) {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  function handleCheck(id) {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }

  function returnTodo() {
    const undoneTodos = todos.filter(todo => !todo.completed);
    dispatch({ type: 'SET_TODOS', payload: undoneTodos });
  }

  return (
    <>
      <div className='w-100 mx-auto'>
        <h1 className='text-white text-center my-4'>Todo</h1>
        <div className='px-65px py-50px mx-auto w-2/5 bg-wrap-bg rounded-2xl'>
          <form onSubmit={handleClick} className='flex items-center mb-8'>
            <input value={todo} onChange={handleChange} type="text" className='bg-transparent text-violet-600 w-full p-2 rounded-xl border border-violet-600 me-2' placeholder='Add a new task' />
            <button type="submit" className='w-11 h-11 rounded-xl text-center text-3xl text-white bg-violet-400 pb-2 transition duration-300 hover:bg-violet-700'>+</button>
          </form>
          <h5 className='text-white mb-4'>Tasks to do - {todos.length}</h5>
          {todos.map(todo => (
            <div key={todo.id} className='flex items-center justify-between w-full bg-dark-purple rounded-xl p-4 mb-5'>
              <h6 className={`text-violet-400 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</h6>
              <div className='flex items-center gap-3'>
                <IoCheckmarkOutline onClick={() => handleCheck(todo.id)} className='text-violet-400 text-xl cursor-pointer hover:text-violet-600' />
                <PiTrashSimpleLight onClick={() => handleDelete(todo.id)} className='text-violet-400 text-xl cursor-pointer hover:text-violet-600' />
              </div>
            </div>
          ))}
          <h1 className='text-white mb-3 mt-4'>Done - {todos.filter(todo => todo.completed).length}</h1>
          {todos.filter(todo => todo.completed).map(todo => (
            <div key={todo.id} className='flex items-center justify-between w-full bg-dark-purple rounded-xl p-4 mb-5'>
              <h6 className='line-through text-[#78CFB0]'>{todo.text}</h6>
              <div className='flex items-center gap-3'>
                <RiArrowGoBackFill onClick={returnTodo} className='text-white font-xl mr-3 cursor-pointer hover:text-gray-500' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
