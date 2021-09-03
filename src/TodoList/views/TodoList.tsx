import TodoItem from "./TodoItem";
import { TodoAdd } from "./TodoAdd";

const list = [
  {
    id: 1,
    text: "hello",
    done: false,
  },
];
export function TodoList() {
  return (
    <div>
      <TodoAdd />
      {list.map((item) => (
        <TodoItem text={item.text} done={item.done} key={item.id} />
      ))}
    </div>
  );
}
