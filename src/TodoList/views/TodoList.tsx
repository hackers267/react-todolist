import TodoItem from "./TodoItem";
import { TodoAdd } from "./TodoAdd";
import { connect } from "react-redux";
import { Component } from "react";

class TodoView extends Component<any, any> {
  render() {
    const { list } = this.props;
    return (
      <div>
        <TodoAdd />
        {list.map((item: any) => (
          <TodoItem
            text={item.text}
            id={item.id}
            done={item.done}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

function mapState(state: any) {
  return {
    list: state.todos,
  };
}

function mapDispatch(dispatch: any) {
  return {};
}

export default connect(mapState, mapDispatch)(TodoView);
