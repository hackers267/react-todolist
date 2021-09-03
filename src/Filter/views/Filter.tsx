import {Component} from "react";

export class Filter extends Component {

    allState=['all','complete','uncompleted'];

    constructor(props: Readonly<{}> | {}) {
        super(props);
        this.state = {
            filter:'all'
        }
    }

    onClick(){}

    render() {
        return <ul>
            {
                this.allState.map(x=><li key={x}>{x.toUpperCase()}</li>)
            }
        </ul>;
    }
}
