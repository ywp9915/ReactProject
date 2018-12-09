import React,{Component} from 'react';

// import {Switch,Route} from 'react-router-dom';

import "../../sass/run.scss";

class Run extends Component{
    constructor(){
        super();
        this.state = {
        }
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(tab,idx){
        
        let {history,match} = this.props;

        let url = match.path + tab.path
        history.push(url);
    }

    componentDidMount(){
        console.log('List:',this.props)
    }
    render(){
        // let {match} = this.props;
        return <div className="run">
        <div className="guild">
            <div className="line-title">
                <span className="line-txt">- 一键发布需求，服务快捷方便！-</span>
            </div>
            <div className="guild-content">
                <img src="https://www.iyemao.cc/tpl/Wap/default/static/service/images/step_title_img3.png" alt=""/>
            </div>
        </div>
        <div className="operate">
            <div className="flex">
                <a className="demand" href="/wap.php?g=Wap&amp;c=Service&amp;a=cat_list">
                    <i className="ico ico-demand"></i>
                    发布需求
                </a>
                <a className="serve" href="/wap.php?g=Wap&amp;c=Service&amp;a=search_cate">
                    <i className="ico ico-serve"></i>
                    发布服务    
                </a>
            </div>
            <p>······    选择以下需求分类快捷发布    ······</p>
        </div>
        <div className="seo-li">
            <div className="title">
                <div className="title-con">
                    <span className="left">
                        跑腿服务  ▶ 
                    </span>
                </div>
                <div className="title-right">
                    <a className="publish" href="http://baidu.com">
                        <i className="ico ico-edit"></i>
                            发布
                    </a>
                </div>
            </div>
            <div className="seo-con">
                <div className="seo-menu">
                    <a href="http://baidu.com">帮我买</a>
                    <a href="http://baidu.com">帮我送</a>
                    <a href="http://baidu.com">帮我取</a>
                </div>
            </div>
        </div>
        
    </div>

    }
}

export {Run};