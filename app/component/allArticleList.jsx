import React from 'react';
import {Link} from 'react-router';
import './list.css'
export default class AllArticleList extends React.Component{
    constructor(){
        super();
        this.state={article:[]}
    }
    componentWillMount(){
        let article = localStorage.getItem('article');
        if(article){
            article = JSON.parse(article);
            this.setState({article:article});
        }
    }
    render(){
        return (
            <main className="main" id="main">
                <div className="main-inner">
                    <div className="content-wrap">
                        <section className="posts-collapse">
                            <span className="archive-move-on"></span>
                            <span className="archive-page-counter">嗯~ o(*￣▽￣*)o </span>
                            <div className="collection-title">
                                <h2 className="archive-year motion-element">2017</h2>
                            </div>
                        {!!this.state.article.length && this.state.article.map((item,index)=>{
                            return (
                                <article className="post post-type-normal"  key={index}>
                                    <header className="post-header">
                                        <h1 className="post-title">
                                            <Link to={"/detail/"+item.id} className="post-title-link">
                                                <span>{item.title}</span>
                                            </Link>
                                        </h1>
                                        <div className="post-meta">
                                            <span className="post-time">{item.mmdd}</span>
                                        </div>
                                    </header>
                                </article>
                            )
                        })

                        }

                            {
                                !this.state.article.length && <article className="post post-type-normal">
                                    <header className="post-header">
                                        <h1 className="post-title">
                                            <a href="javascript:void 0" className="post-title-link">
                                                <span>您还没有发表文章</span>
                                            </a>
                                        </h1>
                                        <div className="post-meta">
                                            <span className="post-time"></span>
                                        </div>
                                    </header>
                                </article>
                            }

                        </section>
                       
                    </div>
                </div>
            </main>
        )
    }
}