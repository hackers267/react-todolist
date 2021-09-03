import {Component, PropsWithChildren} from "react";

type TodoItemParam = {
    text:string;
    done:boolean;
}


type TodoItemProp = PropsWithChildren<TodoItemParam>;
export default class TodoItem extends Component<TodoItemProp, TodoItemParam>{
    constructor(props:TodoItemProp) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<TodoItemParam>, nextState: Readonly<TodoItemParam>, nextContext: TodoItemParam): boolean {
        return nextProps.text!==nextState.text || nextProps.done !== nextState.done;
    }

    render() {
       return <li>
           <span>{this.props.text}</span>
           <span>{this.props.done}</span>
       </li>
    }

}
