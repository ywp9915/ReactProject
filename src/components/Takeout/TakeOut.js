import React,{Component} from 'react';

// import {Switch,Route} from 'react-router-dom';
// import axios from "axios";
import { Grid ,Modal} from 'antd-mobile';
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
    icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6d779bb68503.png',
    text: "cake"
  }));
  function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
class Takeout extends Component{
    constructor(){
        super();
        this.state = {
            modal1: false,
            modal2: false,
            banner:[],
            navlist:[]
        }
        // this.handlerClick = this.handlerClick.bind(this);
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
    onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }
      onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }
    render(){
        // let {match} = this.props;
        return <div className="takeout">
            <div className="header">
                <div className="site-icon">
                    <div className="site-search">
                        <FontAwesomeIcon icon="dot-circle" />
                        <span className="place">合浦</span>
                        <FontAwesomeIcon icon="chevron-right" />
                    </div>
                </div>
                <div className="header-right">
                    <div className="he-con">
                    <FontAwesomeIcon icon="search" />
                    </div>
                </div>
            </div>
            <div className="top_pictrue">
                <img src="https://www.iyemao.cc/upload/adver/000/000/001/5c04e3d2a49e7169.jpg" alt="" />
            </div>
            <div className="menu">
                <Grid data={data1}
                columnNum={4}
                carouselMaxRow={2}
                hasLine={false}
                isCarousel={true}
                renderItem={dataItem => (
                    <div style={{ padding: '12.5px' }}>
                    <img src={dataItem.icon} alt="" style={{width:'50px',height:'50px' }}/>
                    <div style={{ color: '#888', fontSize: '14px', marginTop: '8px' }}>
                        <span>{dataItem.text}</span>
                    </div>
                </div>
                )}
                />
            </div>
            <div className="serve">
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
            <div className="classify">
                <ul>
                    <li className="category">
                        <span className="nav-head-name" onClick={this.showModal('modal2')}>店铺分类 ∨</span>
                    </li>
                    <li className="sort">
                        <span className="nav-head-name" onClick={this.showModal('modal2')}>智能排序 ∨</span>
                    </li>
                    <li className="type">
                        <span classn="nav-head-name" onClick={this.showModal('modal2')}>类  型   ∨</span>
                    </li>
                </ul>
            </div>
            <Modal
                popup
                className="Category"
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                maskClosable={true}
                animationType="slide-down"
            >
            <div className="city">
                <ul>
                    <li className="category">
                        <span className="nav-head-name">店铺分类 ∨</span>
                    </li>
                    <li className="sort">
                        <span className="nav-head-name">智能排序 ∨</span>
                    </li>
                    <li className="type">
                        <span classn="nav-head-name">类  型   ∨</span>
                    </li>
                </ul>
                <div className="child-classify">
                </div>
            </div>
            </Modal>
        </div>
    }
}

export {Takeout};