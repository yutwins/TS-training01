// import { Practice1 } from "./practices/Practice1";
// import { Practice2 } from "./practices/Practice2";
// import { Practice3 } from "./practices/Practice3";
// import { Practice4 } from "./practices/Practice4";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>( "https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }
  return (
    <div className="App">
      <Text color="red" fontSize="20px"/>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}
