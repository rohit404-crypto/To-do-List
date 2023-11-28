import React, {  useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import {GoPlus} from "react-icons/go"
const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj))
  };
};

const Todos = (props) => {
  const [todoInput, setTodoInput] = useState("");

 const addTodo = () => {
   if (!todoInput) {
     alert("Please write something");
     return;
   }
   props.addTodo({
     id: Math.floor(Math.random() * 1000),
     item: todoInput,
     completed: false,
   });
   setTodoInput("");
 }

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };
  console.log(props);

  return (
    <div className="addTodos">
      <input type="text" className="todo-input" onChange={handleChange}  value={todoInput}/>
      <button
        className="add-btn"
        onClick={
          addTodo
        }
      >
       <GoPlus/>
      </button>
      <br />
      
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
