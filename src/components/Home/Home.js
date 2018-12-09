import React,{Component} from 'react';
import axios from "axios";
// import {Switch,Route} from 'react-router-dom';
import { Carousel,SearchBar,Grid  } from 'antd-mobile';
// import Computer from './Computer';
// ,PullToRefresh
import "../../sass/home.scss";
// import '../../../node_modules/antd/dist/antd.min.css'

const data1 = Array.from(new Array(13)).map((_val, i) => (
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc65f864598181.png',
    //     text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    // {
    // icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    // text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    // {
    // icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    // text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    // {
    // icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    // text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "run",
    // },
    {
    icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc665ba7a6a333.png',
    text: "团购",
    }
));
const data2 = Array.from(new Array(7)).map((_val, i) => (
    {
        icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc665ba7a6a333.png',
        text: "二手交易"
    }
    // ,
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc6648c3590271.png',
    //     text: "二手交易"
    // }
    // ,
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc665ba7a6a333.png',
    //     text: "二手交易"
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc665ba7a6a333.png',
    //     text: "二手交易"
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc665ba7a6a333.png',
    //     text: "二手交易"
    // },
    // {
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc665ba7a6a333.png',
    //     text: "二手交易"
    // },{
    //     icon: 'https://www.iyemao.cc/upload/slider/000/000/001/5bbc665ba7a6a333.png',
    //     text: "二手交易"
    // }
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
        columnNum={5}
        carouselMaxRow={2}
        hasLine={false}
        isCarousel={true}
        renderItem={dataItem => (
            <div style={{ padding: '10px' }}>
                <img src={dataItem.icon} alt="" style={{width:'40px',height:'40px' }}/>
                <div style={{ color: '#888', fontSize: '12px'}}>
                    <span style={{ marginBottom: '10px' }}>{dataItem.text}</span>
                </div>
            </div>
        )}
        />
    </div>
}
function News(){
    return <div className="news">
        <div className="title">平台快报</div>
        <div className="notice">
        <Carousel className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplayInterval={4000}
            autoplay
            infinite
            >
            <div className="v-item">[帮助中心]  帮助目录</div>
            <div className="v-item">[平台公告]  关于恶劣加收配送费公告 </div>
            </Carousel>
        </div>
    </div>
}
function Serve(){
    return <div className="serve">
            <div className="left">
                <img src="https://www.iyemao.cc/upload/adver/000/000/006/5bbc65a8a4529900.jpg" alt="小龙虾"/>
            </div>
            <div className="right">
                <div className="right-top">
                    <img src="https://www.iyemao.cc/upload/adver/000/000/006/5bc4d7fe8a146288.png" alt="唯食喵"/>
                </div>
                <div className="right-bot">
                    <img src="https://www.iyemao.cc/upload/adver/000/000/006/5bc4d70e4101d533.png" alt="唯食喵"/>
                </div>
            </div>
        </div>
}

function Classify(){
    return <div className="classify">
        <div className="classifyBox">▍分类信息</div>
        
        <Grid data={data2}
        columnNum={4}
        carouselMaxRow={1}
        hasLine={false}
        isCarousel={true}
        square={false}
        
        renderItem={dataItem => (
            <div style={{ padding: '0 10px 10px 10px',borderRight:'1px solid #eee'}}>
                <img src={dataItem.icon} alt="" style={{width:'40px',height:'40px' }}/>
                <div style={{ color: '#888', fontSize: '12px'}}>
                    <span>{dataItem.text}</span>
                </div>
            </div>
        )}
        />
        <p className="like">   猜你喜欢</p>
        <p className="no">没有更多数据了</p>
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

    componentWillMount(){
        axios.get("/api/wap.php?c=Shop&a=ajax_index")
    }
    render(){
        return  <div className="home">
        <Header/>
        {/* <PullToRefresh> */}
            <div className="banner">
                <Carousel
                    autoplay={true}
                    autoplayInterval={5000}
                    infinite
                    >
                    {this.state.banner.map(banner => (
                        <a
                        href="http://baidu.com"
                        style={{height:'320px'}}
                        key={banner.imgsrc}>
                            <img
                                src={banner.imgsrc} 
                                alt=""
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
        <Serve/>
        <Classify />
        {/* </PullToRefresh> */}
    </div>
    
    }
}

export {Home};