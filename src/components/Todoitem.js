import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import {IoCheckmarkDoneSharp,IoClose} from "react-icons/io5"
const Todoitem = ({ todo, updateTodo, deleteTodo, completedTodo }) => {
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const editTodo = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id: id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={todo.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={todo.item}
        onKeyPress={(e) => editTodo(todo.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}><AiFillEdit/></button>
        {todo.completed===false && <button onClick={() => completedTodo(todo.id)} style={{color:"green"}}><IoCheckmarkDoneSharp/></button>}
        
        <button onClick={() => deleteTodo(todo.id)}style={{color:"red"}}><IoClose/></button>
      </div>
        {todo.completed && <span className="completed">Done</span>}
    </li>
  );
};

export default Todoitem;
