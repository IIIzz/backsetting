import React, { Component } from 'react';
import './Home.css'
import config from '../../chart/config'
import configweek from '../../chart/week'
import {Button } from 'antd';
import {
  Form, DatePicker, Col, Select
} from 'antd';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend';
import {observeable} from 'mobx'
import {observer} from 'mobx-react'

@observer
class Home extends Component {
  constructor(props) {
    super(props)
    let id = ('_' + Math.random()).replace('.', '_');
    this.state = {
      pieId: 'pie' + id,
      collapsed: false,
    }
    this.onclickshow= this.onclickshow.bind(this)
  }

  // state = {
  //   collapsed: false,
  // };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  initPie(id) {
    let myChart = echarts.getInstanceByDom(document.getElementById(id));
    if (myChart === undefined) {
      myChart = echarts.init(document.getElementById(id));
      var cmyChart = echarts.init(document.getElementById('main'))
    }
    myChart.setOption(config)
    cmyChart.setOption(configweek)
  }
  componentDidMount() {
    /**
     * 在这里去调用生成图表的方法是因为，在组件加载后生成
     * dom节点，这个时候canvas才能根据id去绘制图表
     * 在这里去写了一个setTimeout修改了其中的一些数据，来
     * 测试图表的刷新，是否刷新了，后期大家可能是定期去某
     * 接口中获取数据，方法同理
     */
    this.initPie(this.state.pieId);

  }
  // componentDidUpdate() {
  //     this.initPie()
  // }
   onclickshow() {
    this.props.history.push('/login')
  }

  render() {
    const FormItem = Form.Item;
    const Option = Select.Option;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const dataLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
  
   
    return (
      <div className={'jcl-home'}>
            <div style={{ padding: '20px', background: '#fff', position: "relative" }}>
              <div className={'atd-pagination'} style={{ width: '100%' }}>
              </div>
            </div>
            <div>
              <Form  layout="inline">
                  <FormItem
                    {...formItemLayout}
                    label="公司:"
                    hasFeedback
                    className="cpy-option"
                  >
                    <Select defaultValue="1">
                      <Option value="1">泛微软件</Option>
                      <Option value="2">百度</Option>
                      <Option value="3">阿里巴巴</Option>
                    </Select>
                  </FormItem>


                  <FormItem
                    label="时间:"
                    {...dataLayout}
                  >
                    <Col span={11}>
                      <FormItem 
                       className="datapick-wrap-data">
                        <DatePicker placeholder="开始时间"/>
                      </FormItem>
                    </Col>
                    <Col span={2}>
                      <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                        -
                     </span>
                    </Col>
                    <Col span={11}>
                      <FormItem 
                      className="datapick-wrap-data">
                        <DatePicker placeholder="结束时间"/>
                      </FormItem>
                    </Col>
                  </FormItem>
                  
                      <FormItem>
                      <Button>搜索</Button>
                      </FormItem>
                  
              </Form>
            </div>

            <div className={'echart-model'}>
              <div id={this.state.pieId} style={{ width: "500px", height: "500px",overflow:"hidden" }}></div>
              <div id='main' style={{ width: "500px", height: "425px" }}></div>
            </div>
            </div>
    )
  }

}

export default Home;