import React from 'react';
export default class Msg extends React.Component{
    render(){
        return (
            <div className={"alert col-md-offset-3 col-md-9 alert-"+this.props.color} role="alert">
                {this.props.msg}
            </div>
        )
    }
}