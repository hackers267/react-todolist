import { ChangeEvent, ChangeEventHandler, Component, FormEvent } from "react";

export class TodoAdd extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "react",
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
    console.log(this.state.text);
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
