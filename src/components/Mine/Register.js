import React,{Component} from 'react';

import {Switch,Route,Link} from 'react-router-dom';
import {Mine} from "./Mine"
import "../../sass/reg.scss"
class Register extends Component{
    constructor(){
        super();
        this.state = {
            user:"",
            pwd:"",
            login:[
                {
                    pathname:"/Mine"
                }
            ]
        }
    } 
    setUserInfo (event,key){
        const obj={};
        obj[key]=event.target.value;
        this.setState(obj);
    }
    render(){
        return<div id="reg">
        
            <form id="reg-form" autoComplete="off" method="post" 
            >
                <div className="login-info">    
                    <input type="text" className="usern" placeholder="请输入用户名" onChange={(e)=>{
                    this.setUserInfo(e,"user")
                }}/>
                    <input type="password" className="pwd" placeholder="请输入您的密码"  onChange={(e)=>{
                    this.setUserInfo(e,"pwd")
                }}/>
                    <input type="password" placeholder="再次确保您的密码"  onChange={(e)=>{
                    this.setUserInfo(e,"pwd")
                }}/>
                </div>
                <button type="submit" className="btn-login" onClick={()=>{
                alert(this.state.user_name+":"+this.state.user_pwd);
            }} >注册</button>
			</form>
            <ul>
                <li id="agree">
                    <input type="checkbox" />
                    我已阅读并同意<span>《注册协议》</span>
                </li>
                <li id="nowlogin" onClick={()=>{
                    this.props.history.push("/Mine");
                }} >
                立即登录
                </li>
            </ul>
        </div>
    }

    
}
export {Register};