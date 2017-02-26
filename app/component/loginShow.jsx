import React from 'react';
import {Link,IndexLink,hashHistory} from 'react-router';
class LoginShow extends React.Component{
    handleClick(){
        localStorage.removeItem('login');
        location.reload();
        hashHistory.push('/');
    }
    render(){
        return (
            <ul className="menu">
                <li className="menu-item menu-item-home menu-item-active">
                    <Link to="/home">
                        <i className="menu-item-icon fa fa-home fa-fw"></i>
                        首页
                    </Link>
                </li>
                <li className="menu-item menu-item-home menu-item-active">
                    <Link to="/list">
                        <i className="menu-item-icon fa fa-archive fa-fw"></i>
                        目录
                    </Link>
                </li>


                <li className="menu-item menu-item-home menu-item-active">
                    <a href="javascript:;">
                        <i className="menu-item-icon fa fa-user fa-fw"></i>
                        {JSON.parse(localStorage.getItem('login'))}
                    </a>
                </li>
                <li className="menu-item menu-item-home menu-item-active">
                    <Link to="/addArticle/add">
                        <i className="menu-item-icon fa fa-building fa-fw"></i>
                        发表文章
                    </Link>
                </li>
                <li className="menu-item menu-item-home menu-item-active">
                    <IndexLink to="/" onClick={this.handleClick}>
                        <i className="menu-item-icon fa fa-hand-o-right fa-fw"></i>
                        退出
                    </IndexLink>
                </li>


            </ul>
        )
    }
}
export default LoginShow;