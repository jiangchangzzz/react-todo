import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Home.css';

export interface IHomePageProps extends RouteComponentProps<any>{
    home: string;
}

export interface IHomePageState{
    name: string;
}

class HomeComponent extends React.Component<{}, IHomePageState>{
    constructor(props: {}){
        super(props);
        this.state = {
            name: ''
        };
    }

    public setName = () => {
        this.setState({
            name: 'icepy'
        });
    }

    public render(){
        const { name } = this.state;
        return (
            <div>
                <div className="btn" onClick={this.setName}></div>
                <div className="txt">{name}</div>
            </div>
        )
    }
}

export default HomeComponent;