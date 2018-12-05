import React,{Component} from 'react';
import axios from "axios";
import {Switch,Route} from 'react-router-dom';

// import Computer from './Computer';

class Home extends Component{
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

    componentWillMount(){
        // https://www.iyemao.cc/wap.php?c=Shop&a=ajax_index
        axios.get("/api/wap.php?c=Shop&a=ajax_index")
    }
    render(){
        return  <div className="home">
        666
    </div>
    
    }
}

export {Home};