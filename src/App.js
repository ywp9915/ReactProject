import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Route,Redirect,Switch,withRouter} from 'react-router-dom';

import { TabBar } from 'antd-mobile';

//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';

import './sass/common.scss';

import {Home} from './components/Home/Home';
import {Run} from './components/Run/Run';
import {Register} from './components/Mine/Register';
import {Takeout} from './components/Takeout/TakeOut';
import {NotFound} from './components/Page';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome,
    faBicycle,
    faUser,
    faRunning } from '@fortawesome/free-solid-svg-icons'

library.add(
    faHome,
    faBicycle,
    faUser,
    faRunning
)
axios.defaults.baseURL="http://localhost:3000";

class App extends Component {
  constructor(){
    super();
    this.state = {
        tabs:[
            {
                title:'首页',
                path:'/Home',
                icon:'home'
            },
            {
                title:'外卖',
                path:'/Takeout',
                icon:'bicycle'
            },
            {
                title:'跑腿',
                path:'/Run',
                icon:'running'
            },
            {
                title:'我的',
                path:'/Register',
                icon:'user'
            }
        ],
        currentTab:0
    }
  }

  handlerClick(idx,path){
      this.setState({
          currentTab:idx
      });
      this.props.history.push(path);
  }

  componentWillMount(){
      let hash = window.location.hash.slice(1);
      let currentTab = 0;
      this.state.tabs.some((item,idx)=>{
          currentTab = idx;
          return item.path === hash
      });
      this.setState({
          currentTab
      });
      console.log('app props:',this.props)
  }
  

  render() {
    return (
      <div className="container">
        <div className="content">
          <Switch>
            {/* <Route path="{/Home}" exact component={Home} /> */}
            <Route path="/Takeout" component={Takeout} />
            <Route path="/Run" component={Run} />
            <Route path="/Register" component={Register}/>
            {/* <Route path="/Mine" component={Mine} /> */}
            <Route path="/404" component={NotFound} />
            <Redirect from="/" to="/Home" exact/>
            <Redirect to="/404"/>
          </Switch>
        </div>
        <TabBar
            tintColor="#06c1ae"
            noRenderContent={true}
            hidden={!this.props.tabbarStatus}
            >
            {
              this.state.tabs.map((tab,idx)=>{
                return <TabBar.Item
                  title={tab.title}
                  key={tab.path}
                  icon={<FontAwesomeIcon icon={tab.icon}/>}
                  selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
                  selected={this.state.currentTab === idx}
                  onPress={this.handlerClick.bind(this,idx,tab.path)}
                  // badge={tab.path == '/cart' ? this.props.cartQty : null}
                  >
                  {tab.title}
                  </TabBar.Item>
              })
            }
        </TabBar>
        </div>
    );
  }
}

let mapStateToProps = state=>{
    console.log(state);
    return {
        //把state.commonReducer.tabbarStatus映射到props
        tabbarStatus:state.commonReducer.tabbarStatus,
        cartQty:state.cartReducer.goodslist.length
    }
}
App = connect(mapStateToProps)(App);
App = withRouter(App);
export default App;
