import * as React from 'react';

import './Hello.css';

export interface IProps {
    name: string,
    count?: number
}

export interface IState{
    current: number
}

class Hello extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);

        this.state = {
            current: this.props.count || 1
        }
    }

    public render(){
        const {name} = this.props;
        return (
            <div className="hello">
                <div className="hello-text">
                    Hello {name} {this.state.current}
                </div>
                <div className="hello-group">
                    <button type="button" onClick={this.onAdd}>+</button>
                    <button type="button" onClick={this.onMine}>-</button>
                </div>
            </div>
        );
    }

    private onAdd = () => {
        this.setState({
            current: this.state.current + 1
        });
    }

    private onMine = () => {
        this.setState({
            current: this.state.current - 1
        });
    }
}

export default Hello;