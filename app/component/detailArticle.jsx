import React from 'react';
import {Link,IndexLink} from 'react-router';
import './detail.css';

export default class DetailArticle extends React.Component{
    constructor(){
        super();
        this.state={article:[],display:{display:'none'},id:''};
    }
    componentDidMount(){
        let id = this.props.params.id;
        let article = JSON.parse(localStorage.getItem('article'));
        article = article.find(item=>item.id == id);
        article.content = article.content.replace(/&lt;/g,'<');
        article.content = article.content.replace(/&gt;/g,'>');
        this.refs.content.innerHTML = article.content;
        if (article.id == this.props.params.id)
            this.setState({article,display:{display:'block'},id});
        else
            this.setState({article,id});

    }
    handleClick(){
        let article = JSON.parse(localStorage.getItem('article'));
        article = article.filter(item=>item.id != this.state.id);
        localStorage.setItem('article',JSON.stringify(article));
    }
    render(){
        return (
            <main className="main" id="main">
                <div className="main-inner">
                    <div className="content-wrap">
                        <article className="detail">
                            <div className='updel' style={this.state.display}>
                                <Link to={"/addArticle/"+this.state.id}>编辑</Link>
                                <IndexLink to="/" onClick={this.handleClick.bind(this)}>删除</IndexLink>
                            </div>
                            <header className="post-header" style={{textAlign: 'center'}}>
                                <h1>{this.state.article.title}</h1>
                                <div className="post-meta" style={{fontSize: 12+'px',marginBottom: 60+'px'}}>
                                <span className="post-time">
                                    <span className="post-meta-item-icon">
                                        <i className="fa fa-calendar-o"></i>
                                    </span>
                                    <span className="post-meta-item-text">发表于</span>
                                    <span>{this.state.article.createAt}</span>
                                </span>

                                </div>
                            </header>
                            <div className="post-body" ref="content">
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        )
    }
}