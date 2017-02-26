import React from 'react';
import {Link} from 'react-router';
import '../markdown.min';
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {article: []}
    }

    componentWillMount() {
        let article = localStorage.getItem('article');
        if (article) {
            this.setState({article: JSON.parse(article)});
        }
    }

    componentDidMount() {
        let len = this.state.article.length;
        let content = null;
        if(!!len){
            for(let i=0; i<len;i++){
                content=this.refs['content'+i].innerHTML;
                content = content.replace(/&lt;/g,'<').replace(/&gt;/g,'>');
                this.refs['content'+i].innerHTML = content;
            }
        }
    }

    render() {
        return (
            <main className="main" id="main">
                <div className="main-inner">
                    <div className="content-wrap">
                        <section className="content posts-expand">

                            { !!this.state.article.length &&
                                this.state.article.map((item, index)=> {
                                    return (
                                        <article className="post post-type-normal" key={index}>
                                            <header className="post-header">
                                                <h2 className="post-title"><Link className="post-title-link" to={"/detail/"+item.id}>{item.title}</Link> </h2>
                                                <div className="post-meta">
                                                     <span className="post-time" style={{marginRight: 10 + 'px'}}>
                                <span className="post-meta-item-icon">
                                <i className="fa fa-user"></i>
                                </span>
                                <span className="post-meta-item-text">作者： </span>
                            <span>{JSON.parse(item.author)}</span>
                                </span>

                                                    <span className="post-time">
                                <span className="post-meta-item-icon">
                                <i className="fa fa-calendar-o"></i>
                                </span>
                                <span className="post-meta-item-text">发表于</span>
                            <span>{item.createAt}</span>
                                </span>

                                                </div>
                                            </header>
                                            <div className="post-body" ref={'content'+index}>
                                                {item.content}
                                            </div>
                                            <div className="post-more-link text-center">
                                                <Link to={"/detail/"+item.id} className="btn">Read more »</Link>
                                            </div>
                                        </article>
                                    )
                                })
                            }

                            {
                                !this.state.article.length && <article className="post post-type-normal">
                                    <header className="post-header">
                                        <h6 className="post-title"><a className="post-title-link" href="javascript:;">暂时还没有文章</a></h6>
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