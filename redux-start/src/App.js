import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Todos from "./pages/Todos"
import Users from "./pages/Users"
import history from "./history"
import {ConnectedRouter} from "connected-react-router" 

function App() {

  //store를 관찰하여 store가 변경되면 실행됨
  return (
    <ConnectedRouter history={history}>
    <Route path="/" exact component={Home}/>
    <Route path="/todos" exact component={Todos}/>
    <Route path="/users" exact component={Users}/>
    </ConnectedRouter>
  );
}

export default App;
