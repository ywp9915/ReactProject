import React,{Component} from 'react';
import axios from "axios";
import {Switch,Route} from 'react-router-dom';
import { Carousel,SearchBar,Grid  } from 'antd-mobile';
// import Computer from './Computer';

import "../../sass/home.scss";


const data1 = Array.from(new Array(10)).map((_val, i) => (
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
    icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
    icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
    icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
        text: "run",
    },
    {
    icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    text: "run",
    }
));
function Header (){
    return <div className="header">
        <div className="site">
            北海  ∨
        </div>
        <div className="search">
            <SearchBar placeholder="请输入您要搜索的商品"
                maxLength={18} 
               
                /> 
        </div>
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
            <div style={{ padding: '10px' }}>
                <img src={dataItem.icon} alt="" style={{width:'50px',height:'50px' }}/>
                <div style={{ color: '#888', fontSize: '14px'}}>
                    <span>{dataItem.text}</span>
                </div>
            </div>
        )}
        />
    </div>
}
function News(){
    return <div className="news">
        <div className="title">平台快报</div>
        <div>
        <Carousel className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite
            >
            <div className="v-item">[帮助中心]  帮助目录</div>
            <div className="v-item">[平台公告]  关于恶劣加收配送费公告 </div>
            
            </Carousel>
        </div>
    </div>

}
class Home extends Component{
    constructor(){
        super();
        this.state = {
            banner:[
                {
                    imgsrc: "https://www.iyemao.cc/upload/adver/000/000/005/5be87050a90eb740.jpg"
                },
                {
                    imgsrc: "https://www.iyemao.cc/upload/adver/000/000/001/5c0127e19bfca734.jpg"
                },
                {
                    imgsrc:"https://www.iyemao.cc/upload/adver/000/000/001/5c04e41ce187d486.jpg"
                }
            ],
            navlist:[]
        }
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(tab,idx){
        let {history,match} = this.props;
        let url = match.path + tab.path
        history.push(url);
    }
//     <a href="https://www.iyemao.cc/wap.php?c=Shop&amp;a=index#shop-118">
//     <img src="https://www.iyemao.cc/upload/adver/000/000/005/5be87050a90eb740.jpg">
// </a>
    componentWillMount(){
        axios.get("/api/wap.php?c=Shop&a=ajax_index")
    }
    render(){
        return  <div className="home">
        <Header/>
        <div className="banner">
            <Carousel
                autoplay={true}
                autoplayInterval={5000}
                infinite
                >
                {this.state.banner.map(banner => (
                    <a
                    href="#"
                    style={{height:'320px'}}>
                        <img
                            src={banner.imgsrc}
                            style={{ width: '100%', height:'140px', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        </div> 
        <Menu/> 
        <News/>  
    </div>
    
    }
}

export {Home};