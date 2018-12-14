import React from 'react';
import './loginbake.css'
import Parallax from 'parallax-js'
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import birdurl from '../../assets/image/board-birds.png'

const FormItem = Form.Item;
// const url ='../../assets/image/compass.png'

class loginbake extends React.Component{
    constructor(props){
        super(props)
        this.loginFun=this.loginFun.bind(this)
    }
 componentDidMount(){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      }); 
 }
 loginFun(){
     console.log(this.props)
    this.props.history.push('/app/home')
}
    //  parallaxInstance.friction(0.2, 0.2);
 render(){
    const { getFieldDecorator } = this.props.form;
     return(
         <div style={{width:'100%',height:'100%',position:'relative'}}>
             <div id='scene' data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25"
            data-scalar-y="15" style={{width:'100%',height:'100%',overflow:'hidden'}}>
            <div className="light-back" style={{backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'100%',height:'100%'}}>

            </div>
             {/* <div data-depth="0.2" className="light-copmss">
             </div>
             <div data-depth="0.3" className="light-map">
             </div> */}
            
             <div data-depth="0.2" className="light-line">
            
             </div>
             <div data-depth="0.3" className="light-line-two">
            
            </div>
            <div data-depth="0.4" className="light-line-three">
            
            </div>

            <div data-depth="0.3">
            <img src={birdurl}/>
            </div>

             </div>
             
         
             <div  className="login-content" >
                <div className="login-content-pos">
                    <h1  data-depth="0.2">聚才林后台系统</h1>
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
         </div>
     )
 }

}
const WrappedNormalLoginForm = Form.create()(loginbake);
export default WrappedNormalLoginForm