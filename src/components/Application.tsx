import React from 'react';
import IApplication from '../types/iApplication';


export default class Application extends React.Component<IApplication, {}> 
{
    componentDidMount()
    {
        window.setInterval(() =>
        {
            this.props.updateRunningTime();
        }, 1000);
    }

    render() 
    {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <div>
                    <h1>Application is running {this.props.runningTimeInSeconds} seconds.</h1>
                </div>
                <div>
                    <h1>.</h1>
                </div>
                <div>
                </div>
            </div>
        );
    }
}