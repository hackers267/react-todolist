import { ChangeEvent, ChangeEventHandler, Component, FormEvent } from "react";
import { connect } from "react-redux";
import { ADD_TODO } from "../actionTypes";
import { add_todo } from "../actions";

export class TodoView extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "",
    };
  }

  change(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({
      text: value,
    });
  }

  submit(event: FormEvent) {
    event.preventDefault();
    const { add } = this.props;
    add(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.submit(e)}>
        <input value={this.state.text} onChange={(e) => this.change(e)} />
        <button>Add</button>
      </form>
    );
  }
}

function mapState(state: any) {
  return state;
}

function mapDispatch(dispatch: any) {
  return {
    add: (text: string) => dispatch(add_todo(text)),
  };
}

export const TodoAdd = connect(mapState, mapDispatch)(TodoView);
