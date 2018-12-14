import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {
  Link
} from 'react-router-dom'
import { Dropdown } from 'antd';
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend';
import RouterContent from './Component/RouterContent/RouterContent.js'
import {
  Route,
  HashRouter as Router,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';

import Home from './Component/Home/Home';
import Resume from './Component/Resume/resume';
import User from './Component/User/User';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      slide_data: ['/home/data', '/home/user', '/home/resume'],
      slidekeys: ['1']
    }
    this.onclickshow = this.onclickshow.bind(this)
  }

  componentWillMount() {

  }
  componentDidMount() { 
  console.log(this.props.match.url)
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onclickshow() {
     this.props.history.push('/login')
  }


  render() {
    const { Header, Sider, Content } = Layout;
    const SubMenu = Menu.SubMenu;
    const menu = (
      <Menu style={{ marginTop: '-20px' }}>
        <Menu.Item onClick={this.onclickshow}>
          退出登陆
        </Menu.Item>
      </Menu>
    );

    return (
      // <Router>
      // </Router>

      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.slidekeys} >
            <Menu.Item key="1">
              <Link to='/app/home'>
                <Icon type="pie-chart" />
                <span>数据</span>

              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/app/user'>

                <Icon type="user" />
                <span>管理员</span>

              </Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>简历列表</span></span>}
            >

              <Menu.Item key="3">
                <Link to='/app/resume'>
                  <Icon type="pie-chart" />
                  <span>每日简历</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">待定功能</Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Icon type="paper-clip" />
              <span>待定功能</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Dropdown className="user" overlay={menu} placement="bottomRight">
              <Icon type="unlock" />
            </Dropdown>

          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', background: 'white' }}>
            {/* {<RouterContent />} */}
            {/* {this.props.children} */}
            <div>
              <Switch>
                <Route exact path="/app/home"  component={Home} />
                <Route  exact path="/app/resume" component={Resume} />
                <Route  exact path="/app/user" component={User} />
                <Route render={() => <Redirect to="/NotFound" />} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }

}

export default withRouter(App);