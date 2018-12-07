import React,{Component} from 'react';

import {Switch,Route,Link} from 'react-router-dom';

import {Register} from "./Register";
import "../../sass/login.scss";

class Mine extends Component{
    constructor(){
        super();
        this.state = {
           login:[
               {
                   font:"立即注册",
                   path:"./Register"
               }
           ]
        }
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(path){
        this.setState({
            
        });
        if(path){
        this.props.history.push(path);
        }
    }

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        // let data= this.props.path;
        return <div className="login">
           <form id="login-form" autoComplete="off" method="post" 
           action="/wap.php?g=Wap&amp;c=Login&amp;a=index" location_url="/wap.php?g=Wap&amp;c=My&amp;a=index">
                <div className="login-info">    
                    <input type="text" className="usern" placeholder="请输入用户名" />
                    <input type="password" placeholder="请输入您的密码" />
                </div>
                <button type="submit" className="btn-login">登录</button>
			</form>
            <ul>
          
                    <li id="reg">
                        立即注册
                    </li>
                
                <li id="forgetpwd">
                    <a href="#">找回密码</a>
                </li>

            </ul>
            {/* <Switch>
                <Route path="{/Register}" component={Register} />
                
            </Switch> */}

        </div>
    }
}

export {Mine};