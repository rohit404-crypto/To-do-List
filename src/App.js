  import logo from './logo.svg';
import './css/main.css';
import Todos from './components/Todos';
import DisplayTodo from './components/DisplayTodo';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos/>
      <DisplayTodo/>
    </div>
  );
}

export default App;
