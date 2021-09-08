import { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";
import { filterTypes } from "../constant";

export class FilterView extends Component<any, any> {
  allState = [filterTypes.all, filterTypes.completed, filterTypes.uncompleted];

  constructor(props: any) {
    super(props);
  }

  onClick(str: filterTypes) {
    const { setFilter } = this.props;
    setFilter(str);
  }

  render() {
    return (
      <ul>
        {this.allState.map((x) => (
          <li key={x} onClick={() => this.onClick(x)}>
            {x}
          </li>
        ))}
      </ul>
    );
  }
}
function mapDispatch(dispatch: any) {
  return {
    setFilter: (text: filterTypes) => dispatch(setFilter(text)),
  };
}

function mapState(state: any) {
  return {
    filter: state.filter,
  };
}

export const Filter = connect(mapState, mapDispatch)(FilterView);
