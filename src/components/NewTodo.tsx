import * as React from 'react';

interface INewTodoProps {
    onNewTodo: (e: string)=>void;
}

interface INewTodoState {
    title: string;
}

export class NewTodo extends React.Component<INewTodoProps, INewTodoState> {
  state = {
      title: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        title: e.target.value
    });
  };

  handleClick = () => {
    this.props.onNewTodo(this.state.title);
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="please input title"
            value={this.state.title}
            onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default NewTodo
