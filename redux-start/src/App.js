import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFromContainer';
import UserListContainer from './containers/UserListContainer';


function App() {

  //store를 관찰하여 store가 변경되면 실행됨
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
