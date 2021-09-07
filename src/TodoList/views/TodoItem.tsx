import { Component, PropsWithChildren } from "react";
import { connect } from "react-redux";
import styles from "./index.module.css";
import { remove_todo, toggle_todo } from "../actions";

type TodoItemParam = {
  text: string;
  done: boolean;
  id: string;
};

type TodoItemProp = PropsWithChildren<TodoItemParam>;
const todoItem = class TodoItem extends Component<
  TodoItemParam,
  TodoItemParam
> {
  constructor(props: TodoItemProp) {
    super(props);
  }

  toggle() {
    // @ts-ignore
    const { id, toggle } = this.props;
    toggle(id);
  }

  remove() {
    // @ts-ignore
    const { id, remove } = this.props;
    remove(id);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <span>{this.props.text}</span>
        <span onClick={() => this.toggle()}>
          Done:{this.props.done ? "YES" : "No"}
        </span>
        <span onClick={() => this.remove()}>X</span>
      </div>
    );
  }
};

function mapDispatch(dispatch: any) {
  return {
    toggle: (id: string) => dispatch(toggle_todo(id)),
    remove: (id: string) => dispatch(remove_todo(id)),
  };
}

export default connect(null, mapDispatch)(todoItem);
