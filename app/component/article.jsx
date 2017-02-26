import React from 'react';
export default class Article extends React.Component{
    constructor(){
        super();
        this.state={article:[{title:'',content:'',createAt:''}]}
    }
    componentWillMount(){
        let article = localStorage.getItem('article');
        article ? this.setState('article',JSON.parse('article')) : null;
    }
    render(){
        return (
        <article className="post post-type-normal">
            <header className="post-header">
            <h2 className="post-title"><a className="post-title-link" href="/article/detail/<%=doc._id%>">{this.state.article.title}</a></h2>
            <div className="post-meta">
            <span className="post-time">
            <span className="post-meta-item-icon">
            <i className="fa fa-calendar-o"></i>
            </span>
            <span className="post-meta-item-text">发表于</span>
        <span>{this.state.article.createAt}</span>
            </span>

            </div>
            </header>
            <div className="post-body">
                {this.state.article.content}
            </div>
            <div className="post-more-link text-center">
            <a href="/article/detail/<%=doc._id%>" className="btn">Read more »</a>
        </div>
        </article>
        )
    }
}