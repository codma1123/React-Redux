import { useSelector } from 'react-redux'
import TodoList from '../components/TodoList'

// const mapStateToProps = (state)=>{
//   return {
//     todos: state.todos
//   };
// }
// const mapDispatchToProps = (dispatch)=>{
//   return {}
// } 

// const TodoListContainer = connect(
//   mapStateToProps,   //store에 state를 받아서 어떤 props를 넘겨줄것인가?
//   mapDispatchToProps                   //state에 dispatch를 할수있는 함수
// )(TodoList);                          // 넘겨줄 컴포넌트
  

//store에 연결하여 state를 꺼내서 필요한것을 props로 넣어줌
function TodoListContainer(){
  const todos = useSelector((state)=>state.todos);

  return <TodoList todos={todos}/>
}
export default TodoListContainer
