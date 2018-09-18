import * as React from 'react';

import './NewTodo.css';

interface INewTodoProps {
    onNewTodo: (e: string)=>void;
}

interface INewTodoState {
    title: string;
    isError: boolean;
}

export class NewTodo extends React.Component<INewTodoProps, INewTodoState> {
  state: INewTodoState = {
      title: '',
      isError: false
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
        title: e.target.value
    });
  };

  handleClick = () => {
    if(!this.state.title.trim()){
      this.setState({
        isError: true
      });
    } else {
      this.setState({
        isError: false
      });
      this.props.onNewTodo(this.state.title);
    }
  };

  render() {
    return (
      <div className="new-todo">
        <div className="new-group">
          <input className="new-input" type="text" placeholder="please input title"
                value={this.state.title}
                onChange={this.handleChange}
          />
          <button className="new-btn" type="button" onClick={this.handleClick}>New</button>
        </div>
        {this.state.isError ?
          <p className="new-warn">Title is required.</p>
          : null
        }
      </div>
    )
  }
}

export default NewTodo
