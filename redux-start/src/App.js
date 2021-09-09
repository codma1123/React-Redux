import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


function App() {

  //store를 관찰하여 store가 변경되면 실행됨
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
