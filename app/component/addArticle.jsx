import React from 'react';
import '../markdown.min';
import './addArticle.css';
import {hashHistory} from 'react-router';
export default class AddArticle extends React.Component {
    componentDidMount(){
       let id = this.props.params.id;
        if(!isNaN(id)){
            let article = JSON.parse(localStorage.getItem('article'));
            article = article.find(item => item.id == id);
            this.refs.title.value = article.title;
            this.refs.textInput.value = article.markdown;
            this.refs.preview.innerHTML = article.content;
        }
    }
    handleInput() {
        var text = this.refs.textInput.value;
        this.refs.preview.innerHTML = markdown.toHTML(text)
    }

    formatTime(date,template) {
        template = template || '{0}年{1}月{2}日 {3}时{4]分{5}秒';
        var ary = date.match(/\d+/g);
        template = template.replace(/\{(\d+)\}/g, function () {
            var index = arguments[1],
                result = ary[index];
            result = result || '00';
            result.length < 2 ? result = '0' + result : null;
            return ary[arguments[1]];
        });
        return template;
    }
    handleClick() {
        let title = this.refs.title.value;
        let content = this.refs.preview.innerHTML;
        let markdown = this.refs.textInput.value;
        let reg = /^\s*$/;
        if (reg.test(title)) {
            alert('标题不能为空！');
            return;
        }
        if (reg.test(content)) {
            alert('文章内容不能为空！');
            return;
        }
        let createAt = this.formatTime(new Date().toLocaleString(),'{0}-{1}-{2} {3}:{4}:{5}');
        let mmdd = this.formatTime(new Date().toLocaleString(),'{1}-{2}');
        let articleObj = {
            title,
            content,
            createAt,
            mmdd,
            markdown,
            author: localStorage.getItem('login')
        };
        let article = localStorage.getItem('article');
        if (article) {
            article = JSON.parse(article);
            let idNum = article.length ? parseInt(article[article.length - 1].id)+1 : 1;
            articleObj.id=idNum;
            article.push(articleObj);
            localStorage.setItem('article', JSON.stringify(article));
            hashHistory.push('/');
        } else {
            articleObj.id=1;
            localStorage.setItem('article', JSON.stringify([articleObj]));
            hashHistory.push('/');
        }

    }

    render() {
        return (
            <main className="main" id="main">
                <div className="main-inner">
                    <form role="form" className="form-horizontal" style={{position:'relative'}}>
                        <div className="form-group title">
                            <label htmlFor="title" className="control-label col-md-2 text-">标题：</label>
                            <div className="col-md-10 input-group">
                                <div className="input-group-addon">
                                    <span className="glyphicon glyphicon-tag"></span>
                                </div>
                                <input className="form-control" type="text" ref="title" name="title" required/>
                            </div>
                        </div>
                        <div ref="wrap" className="wrap">
                            <textarea ref="textInput" onInput={this.handleInput.bind(this)}
                                      rows="6" cols="60" placeholder='请使用Markdown语法'></textarea>
                            <div ref="preview"></div>
                        </div>

                        <input className="btn btn-success" type="button" value='发表文章'
                               onClick={this.handleClick.bind(this)} style={{position:'absolute',top:0,right:-150+'px'}}/>
                    </form>
                </div>

            </main>
        )
    }
}