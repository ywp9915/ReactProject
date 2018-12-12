import React,{Component} from 'react';
import "../../sass/search.scss"
class Search extends Component{
    constructor(){
        super();

    }

    render(){
        return <div className="search">
            <div className="searchbox">
                <input type="search" id="keyword" placeholder="请输入搜索词" autocomplete="off"/>
            
            </div>
        </div>

    }
}
export {Search}