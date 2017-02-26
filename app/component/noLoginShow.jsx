import React from 'react';
import {Link} from 'react-router';
export default class NoLoginShow extends React.Component{
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
                    <Link to="/signin">
                        <i className="menu-item-icon fa fa-user fa-fw"></i>
                        登陆
                    </Link>
                </li>
                <li className="menu-item menu-item-home menu-item-active">
                    <Link to="/signup">
                        <i className="menu-item-icon fa fa-thumbs-up fa-fw"></i>
                        注册
                    </Link>
                </li>


            </ul>
        )
    }
}