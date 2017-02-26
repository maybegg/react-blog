import React, {Component} from 'react';

import LoginShow from './loginShow';
import NoLoginShow from './noLoginShow';

import '../css/index.css';
import '../lib/font-awesome-4.7.0/css/font-awesome.min.css';
import '../css/animate.css'
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {login:false,a:1}

    }
    componentDidMount(){
        if(localStorage.getItem('login')){
            this.setState({
                login:true
            })
        }
    }
    render() {
        return (
            <div>
            <header className="header" id="header">
                <div className="header-inner clear">
                    <div className="site-meta">
                        <div>
                            <a href="" className="brand">
                                <span className="logo-line-before">
                                    <i ></i>
                                </span>
                                <h1 className="site-title">哈哈哈哈</h1>
                                <span className="logo-line-after">
                            <i ></i>
                        </span>
                            </a>
                        </div>
                    </div>
                    <nav className="site-nav clear">
                        <div className="site-search">
                            <form className="fa site-search-form">
                                <input type="text" className=" st-search-input st-default-search-input"/>
                            </form>
                        </div>

                        {this.state.login?<LoginShow/>:<NoLoginShow/>}

                    </nav>
                </div>
            </header>
            {this.props.children}

                <footer className="footer">
                    <div className="footer-inner" id="footer">
                        <div className="copyright">
                            ©
                            <span>2017</span>
                            <span className="with-love">
                <i className="fa fa-heart"></i>
            </span>
                            <span className="author">M</span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    };
}
export default Header;
