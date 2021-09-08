import TodoItem from "./TodoItem";
import { TodoAdd } from "./TodoAdd";
import { connect } from "react-redux";
import { Component } from "react";
import { filterTypes } from "../../Filter/constant";

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

function selectVisibleList(list: any[], filter: filterTypes) {
  switch (filter) {
    case filterTypes.all:
      return list;
    case filterTypes.completed:
      return list.filter((x) => x.done);
    case filterTypes.uncompleted:
      return list.filter((x) => !x.done);
    default:
      throw new Error("not support filter type");
  }
}

function mapState(state: any) {
  return {
    list: selectVisibleList(state.todos, state.filter),
  };
}

function mapDispatch(dispatch: any) {
  return {};
}

export default connect(mapState, mapDispatch)(TodoView);
