import React from 'react';
import './Login.css'
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import 'particles.js'

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.loginFun=this.loginFun.bind(this)
    }
    componentDidMount(){
        /* eslint-disable */
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 260,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "bottom",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 300,
                    "duration": 4
                }
            }
        }
        })
      }
    handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              
            }
        });
    }
    loginFun(){
        this.props.history.push('/app/home')
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div className="login-body">
                  <div id="particles-js"></div>
                <div className="login-content" >
                <div  className="login-content-pos">
                    <h1>聚才林后台系统</h1>
                    <Form id='components-form-demo-normal-login' onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请填写用户名' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请填写密码' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox style={{color:'#1890ff'}}>记住密码</Checkbox>
                            )}
                            <span className="login-form-forgot" href="">忘记密码</span>
                            <Button type="primary" htmlType="submit" onClick={this.loginFun} className="login-form-button">
                                登 录
                           </Button>
                            {/* Or <a href="">现在注册</a> */}
                        </FormItem>
                    </Form>
                    </div>
                </div>
            {/* </div> */}
            </div>
          
        )
    }


}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm