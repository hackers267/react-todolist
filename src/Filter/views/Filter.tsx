import { Component } from "react";

export class Filter extends Component {
  allState = ["all", "complete", "uncompleted"];

  constructor(props: Readonly<{}> | {}) {
    super(props);
    this.state = {
      filter: "all",
    };
  }

  onClick(str: string) {
    console.log(str);
  }

  render() {
    return (
      <ul>
        {this.allState.map((x) => (
          <li key={x} onClick={() => this.onClick(x)}>
            {x.toUpperCase()}
          </li>
        ))}
      </ul>
    );
  }
}
