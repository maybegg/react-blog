import React from 'react';
import {hashHistory} from 'react-router';
import Msg from './error';
export default class SignIn extends React.Component {
    constructor(){
        super();
        let user = localStorage.getItem('reg');
        let flag = false;
        if(user) {
            user = JSON.parse(user);
            flag = true;
        }
        user = user || {};
        this.state={error:false,user,flag};
        localStorage.removeItem('reg');
    }
    handleClick() {
        let users = localStorage.getItem('user');
        if (users) {
            let userName = this.refs.userName.value;
            let password = this.refs.password.value;
            users = JSON.parse(users);
            var flag = users.find(item=>item.userName == userName && item.password == password);
            if (flag) {
                localStorage.setItem('login',JSON.stringify(userName));
                location.reload();
                hashHistory.push('/')
            }else{
                this.setState({error:true,flag:false});
            }
        }
    }

    render() {
        return (
            <main className="main" id="main" style={{marginTop: 100 + 'px'}}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div className="col-md-4 col-md-offset-4">
                        <form role="form" method="post" className="form-horizontal">
                            <div className="form-group" style={{marginBottom: 30 + 'px'}}>
                                <label htmlFor="username" className="control-label col-md-3">用户名：</label>
                                <div className="col-md-9 input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </div>
                                    <input className="form-control" type="text" ref="userName" defaultValue={this.state.user.userName}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="control-label col-md-3">密码：</label>
                                <div className="col-md-9 input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </div>
                                    <input className="form-control" type="password" ref="password" defaultValue={this.state.user.password}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-6 col-md-2">
                                    <input className="btn btn-primary" type="button" value='登陆'
                                           onClick={this.handleClick.bind(this)}/>
                                </div>
                            </div>
                        </form>

                        {this.state.error && <Msg msg="用户名或密码错误" color="danger"/>}
                        {this.state.flag && <Msg msg="注册成功请登录" color="success"/>}

                    </div>
                </div>
            </main>
        )
    }
}