import React,{Component} from 'react';

import {Switch,Route,Link} from 'react-router-dom';
import "../../sass/reg.scss"
class Register extends Component{
    render(){
        return<div id="reg">
            <form id="reg-form" autoComplete="off" method="post" 
            >
                <div className="login-info">    
                    <input type="text" className="usern" placeholder="请输入用户名" />
                    <input type="text" className="pwd" placeholder="请输入您的密码" />
                    <input type="text" placeholder="再次确保您的密码" />
                </div>
                <button type="submit" className="btn-login">注册</button>
			</form>
            <ul>
                <li id="agree">
                    <input type="checkbox" />
                    我已阅读并同意<span>《注册协议》</span>
                </li>
                <li id="nowlogin">
                    立即登录
                </li>
            </ul>
        </div>
    }

    
}
export {Register};