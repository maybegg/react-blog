import React from 'react';
import Msg from './error';
import {hashHistory} from 'react-router';
export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }

    componentWillMount() {
        var userName = localStorage.userName || '';
        var password = localStorage.password || '';
        var email = localStorage.email || '';
        this.setState({
            userName,
            password,
            email
        })
    }

    handleClick() {
        var user = localStorage.getItem('user');
        var userName = this.refs.userName.value;
        var password = this.refs.password.value;
        var email = this.refs.email.value;
        var userObj = {
            userName,
            password,
            email
        };

        if (!userName) {
            alert('请输入用户名');
            return;
        }
        if (!password) {
            alert('请输入密码');
            return;
        }
        if (!email) {
            alert('请输入邮箱');
            return;
        }

        if (user) {
            //以前有用户注册
            user = JSON.parse(user);
            var flag = user.find(function (item, index) {
                return item.userName == userName
            });
            if (flag) {
                //用户名已存在
                this.setState({error: true})
            } else {
                user.push(userObj);
                localStorage.setItem('user', JSON.stringify(user));
                hashHistory.push('/signin');
                localStorage.setItem('reg', JSON.stringify({userName, password}))
            }
        } else {
            //第一次用户注册
            localStorage.setItem('user', JSON.stringify([userObj]));
            hashHistory.push('/signin');
            localStorage.setItem('reg', JSON.stringify({userName, password}))
        }
    }

    render() {
        return (
            <main className="main" id="main" style={{marginTop: 100 + 'px'}}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div className="col-md-4 col-md-offset-4">
                        <form role="form" method="post" className="form-horizontal" encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="username" className="control-label col-md-3">用户名：</label>
                                <div className="col-md-9 input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </div>
                                    <input className="form-control" type="text" ref="userName" name="userName"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="control-label col-md-3">密码：</label>
                                <div className="col-md-9 input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </div>
                                    <input className="form-control" type="password" ref="password" name="password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="control-label col-md-3">邮箱：</label>
                                <div className="col-md-9 input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </div>
                                    <input className="form-control" type="email" ref="email" name="email"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-offset-6 col-md-2">
                                    <input className="btn btn-primary" type="button" value='注册'
                                           onClick={this.handleClick.bind(this)}/>
                                </div>
                            </div>
                        </form>

                        { this.state.error && <Msg msg="您的用户名已被占用" color="danger"/> }

                    </div>
                </div>
            </main>
        )
    }
}