import React,{Component} from 'react';

import {Switch,Route} from 'react-router-dom';
import axios from "axios";
import { Grid } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import "../../sass/takeout.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSearch,
    faChevronRight,
    faDotCircle
     } from '@fortawesome/free-solid-svg-icons'

library.add(
    faSearch,
    faChevronRight,
    faDotCircle
)
const data1 = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'https://www.iyemao.cc/wap.php?c=Shop&a=ajax_index',
    text: "run"
  }));
function Header (){
    return <div className="header">
        <span className="site" >
            <FontAwesomeIcon icon="dot-circle" />
            <span className="place">合浦</span>
            <FontAwesomeIcon icon="chevron-right" />
            <FontAwesomeIcon icon="search" />
            
        </span>
    </div>
}
function Pictrue (){
    return <div className="top_pictrue">
    <img src="https://www.iyemao.cc/upload/adver/000/000/001/5c04e3d2a49e7169.jpg"/>
    </div>
}
function Menu(){
    return <div className="menu">
        <Grid data={data1}
        columnNum={4}
        carouselMaxRow={2}
        hasLine={false}
        isCarousel={true}
        renderItem={dataItem => (
            <div style={{ padding: '12.5px' }}>
                <img src={dataItem.icon} alt="" />
                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                    <span>{dataItem.text}</span>
                </div>
            </div>
        )}
        />
    </div>
}
function Serve(){
    return <div className="serve">
            <div className="left">
                <img src="https://www.iyemao.cc/upload/adver/000/000/001/5bc690b78481e230.jpg" alt="跑腿服务	"/>
            </div>
            <div className="right">
                <div className="right-top">
                    <img src="https://www.iyemao.cc/upload/adver/000/000/001/5bc690c3611b2352.jpg" alt="跑腿服务"/>
                </div>
                <div className="right-bot">
                <img src="https://www.iyemao.cc/upload/adver/000/000/001/5bc690cfde1fd242.jpg" alt="跑腿服务	"/>
                </div>
            </div>
        </div>
}
class Takeout extends Component{
    constructor(){
        super();
        this.state = {
            banner:[],
            navlist:[]
        }
        // this.handlerClick = this.handlerClick.bind(this);
    }

    render(){
        let {match} = this.props;
        return <div className="takeout">
            <Header/>
            <Pictrue/>
            <Menu/>
            <Serve/>
        </div>
    }
}

export {Takeout};